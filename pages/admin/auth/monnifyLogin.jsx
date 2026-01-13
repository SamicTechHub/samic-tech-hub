import { useState, useEffect } from 'react';
import { Key, Eye, EyeOff, Save, RotateCcw, AlertCircle, CheckCircle, Shield, TestTube, LogOut, Lock, User } from 'lucide-react';
import styles from '../../../styles/MonnifyAdminDashboard.module.css'

export default function MonnifyAdminDashboard() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  // Config state
  const [apiKey, setApiKey] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [contractCode, setContractCode] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [showSecretKey, setShowSecretKey] = useState(false);
  const [loading, setLoading] = useState(false);
  const [testingConnection, setTestingConnection] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isConfigured, setIsConfigured] = useState(false);
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');

  // Password change state
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const API_URL = 'http://localhost:8081';


  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchConfig();
    }
  }, [isAuthenticated]);

  const checkAuth = async () => {
    const storedToken = localStorage.getItem('adminToken');
    if (!storedToken) return;

    try {
      const response = await fetch(`${BASE_URL}/api/auth/verify`, {
        headers: {
          'Authorization': `Bearer ${storedToken}`
        }
      });

      const data = await response.json();
      if (data.success) {
        setIsAuthenticated(true);
        setCurrentUser(data.data.user);
        setToken(storedToken);
      } else {
        localStorage.removeItem('adminToken');
      }
    } catch (error) {
      localStorage.removeItem('adminToken');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('adminToken', data.data.token);
        setToken(data.data.token);
        setIsAuthenticated(true);
        setCurrentUser(data.data.user);
        setMessage({ type: 'success', text: 'Login successful!' });
      } else {
        setMessage({ type: 'error', text: data.message || 'Login failed' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch(`${BASE_URL}/api/auth/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error('Logout error:', error);
    }

    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setCurrentUser(null);
    setToken(null);
    setUsername('');
    setPassword('');
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' });
      return;
    }

    if (newPassword.length < 8) {
      setMessage({ type: 'error', text: 'Password must be at least 8 characters' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(`${BASE_URL}/api/auth/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Password changed successfully!' });
        setShowChangePassword(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to change password' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const fetchConfig = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/monnify/config`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      
      if (data.success && data.data) {
        setContractCode(data.data.contractCode || '');
        setIsConfigured(data.data.isConfigured);
        setIsEncrypted(data.data.isEncrypted);
        setLastUpdated(data.data.lastUpdated);
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to fetch configuration' });
    }
  };

  const handleSave = async () => {
    if (!apiKey || !secretKey || !contractCode) {
      setMessage({ type: 'error', text: 'All fields are required' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(`${BASE_URL}/api/monnify/config`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ apiKey, secretKey, contractCode }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Configuration saved and encrypted successfully!' });
        setIsConfigured(true);
        setIsEncrypted(true);
        setApiKey('');
        setSecretKey('');
        setShowApiKey(false);
        setShowSecretKey(false);
        fetchConfig();
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to save configuration' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    if (!confirm('Are you sure you want to reset the Monnify configuration? This will delete all encrypted data and cannot be undone.')) {
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(`${BASE_URL}/api/monnify/config`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (data.success) {
        setApiKey('');
        setSecretKey('');
        setContractCode('');
        setIsConfigured(false);
        setIsEncrypted(false);
        setLastUpdated('');
        setMessage({ type: 'success', text: 'Configuration and encryption keys reset successfully!' });
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to reset configuration' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleTestConnection = async () => {
    setTestingConnection(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(`${BASE_URL}/api/monnify/test-connection`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Connection test successful! Credentials are valid and decryptable.' });
      } else {
        setMessage({ type: 'error', text: data.message || 'Connection test failed' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to test connection' });
    } finally {
      setTestingConnection(false);
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <div className={styles.loginIconWrapper}>
            <div className={styles.loginIcon}>
              <Shield size={32} />
            </div>
          </div>
          
          <h1 className={styles.loginTitle}>Admin Login</h1>
          <p className={styles.loginSubtitle}>Sign in to access Monnify dashboard</p>

          {message.text && (
            <div className={`${styles.alert} ${message.type === 'success' ? styles.alertSuccess : styles.alertError}`}>
              {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
              <span>{message.text}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className={styles.loginForm}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Username</label>
              <div className={styles.inputWrapper}>
                <User size={20} className={styles.inputIcon} />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Password</label>
              <div className={styles.inputWrapper}>
                <Lock size={20} className={styles.inputIcon} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className={styles.input}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.inputIconRight}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className={styles.btnPrimary}
            >
              {authLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className={styles.loginNote}>
            <p><strong>Default credentials:</strong> admin / admin123<br />
            Change the password immediately after first login.</p>
          </div>
        </div>
      </div>
    );
  }

  // Main Dashboard
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.headerIcon}>
              <Key size={24} />
            </div>
            <div>
              <h1 className={styles.headerTitle}>Monnify Admin Dashboard</h1>
              <p className={styles.headerSubtitle}>Manage your encrypted Monnify API configuration</p>
            </div>
          </div>
          <div className={styles.headerRight}>
            {isEncrypted && (
              <div className={styles.badgeEncrypted}>
                <Shield size={20} />
                <span>AES-256 Encrypted</span>
              </div>
            )}
            <div className={styles.badgeUser}>
              <User size={16} />
              <span>{currentUser?.username}</span>
            </div>
            <button
              onClick={() => setShowChangePassword(!showChangePassword)}
              className={styles.btnIcon}
              title="Change Password"
            >
              <Lock size={20} />
            </button>
            <button onClick={handleLogout} className={styles.btnLogout}>
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Change Password Section */}
        {showChangePassword && (
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Change Password</h3>
            <form onSubmit={handleChangePassword} className={styles.passwordForm}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Confirm New Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.buttonGroup}>
                <button type="submit" disabled={loading} className={styles.btnPrimary}>
                  {loading ? 'Changing...' : 'Change Password'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowChangePassword(false)}
                  className={styles.btnSecondary}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Status Banner */}
        {isConfigured && (
          <div className={styles.statusBanner}>
            <CheckCircle size={20} />
            <div className={styles.statusContent}>
              <span className={styles.statusTitle}>Monnify is configured and ready to use</span>
              {lastUpdated && (
                <span className={styles.statusSubtitle}>
                  Last updated: {new Date(lastUpdated).toLocaleString()}
                </span>
              )}
            </div>
            <button
              onClick={handleTestConnection}
              disabled={testingConnection}
              className={styles.btnTest}
            >
              <TestTube size={16} />
              {testingConnection ? 'Testing...' : 'Test Connection'}
            </button>
          </div>
        )}

        {/* Message Alert */}
        {message.text && (
          <div className={`${styles.alert} ${message.type === 'success' ? styles.alertSuccess : styles.alertError}`}>
            {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            <span>{message.text}</span>
          </div>
        )}

        {/* Configuration Form */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>API Configuration</h2>
            {isEncrypted && (
              <span className={styles.badgeSmall}>Credentials stored encrypted</span>
            )}
          </div>
          
          <div className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                API Key {isConfigured && <span className={styles.labelSuccess}>(Currently set)</span>}
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type={showApiKey ? 'text' : 'password'}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder={isConfigured ? 'Enter new API Key to update' : 'Enter your Monnify API Key'}
                  className={styles.input}
                />
                <button
                  type="button"
                  onClick={() => setShowApiKey(!showApiKey)}
                  className={styles.inputIconRight}
                >
                  {showApiKey ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Secret Key {isConfigured && <span className={styles.labelSuccess}>(Currently set)</span>}
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type={showSecretKey ? 'text' : 'password'}
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                  placeholder={isConfigured ? 'Enter new Secret Key to update' : 'Enter your Monnify Secret Key'}
                  className={styles.input}
                />
                <button
                  type="button"
                  onClick={() => setShowSecretKey(!showSecretKey)}
                  className={styles.inputIconRight}
                >
                  {showSecretKey ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Contract Code</label>
              <input
                type="text"
                value={contractCode}
                onChange={(e) => setContractCode(e.target.value)}
                placeholder="Enter your Monnify Contract Code"
                className={styles.input}
              />
            </div>

            <div className={styles.buttonGroup}>
              <button
                onClick={handleSave}
                disabled={loading}
                className={styles.btnPrimary}
              >
                <Save size={20} />
                {loading ? 'Saving...' : isConfigured ? 'Update Configuration' : 'Save Configuration'}
              </button>
              
              <button
                onClick={handleReset}
                disabled={loading || !isConfigured}
                className={styles.btnDanger}
              >
                <RotateCcw size={20} />
                Reset All
              </button>
            </div>
          </div>
        </div>

        {/* Security Info */}
        <div className={styles.infoCard}>
          <Shield size={24} className={styles.infoIcon} />
          <div>
            <h3 className={styles.infoTitle}>Security Features</h3>
            <ul className={styles.infoList}>
              <li>Admin authentication required to access dashboard</li>
              <li>All API keys encrypted with AES-256-GCM encryption</li>
              <li>Session-based authentication with automatic timeout</li>
              <li>Passwords hashed with PBKDF2 (100,000 iterations)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}