import { useEffect, useState } from 'react';
import styles from '../../styles/reserveAdmin.module.css';
import { BASE_URL } from "../../lib/constants";


export default function AdminDashboard() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/reservations`)
      .then((res) => res.json())
      .then(setReservations);
  }, []);

  return (
    <div className={styles.container}>
      <h2>Admin Dashboard</h2>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <ul className={styles.list}>
          {reservations.map((r) => (
            <li key={r.id}>
              <strong>{r.name}</strong> booked <em>{r.coworkspace}</em> on {r.date} at {r.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
