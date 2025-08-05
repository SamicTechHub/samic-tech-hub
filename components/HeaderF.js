import React, { useEffect, useState } from 'react';
import style from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === "/";
  const isAbout = router.pathname === "/about";


  useEffect(() => {
    window.onscroll = function () {
      setScrolled(window.scrollY > 30);
    };
  }, []);

  return (
    <section
      className={`${style.headerContainer} ${scrolled ? style.headerBackground : ''}`}
    >
      <div className={style.brandContainer}>
        <div className={style.logoContainer}>
          <Image src="/img/logoGBg.png" alt="Samic Tech Hub" layout="fill" />
        </div>
        <h1>Samic</h1>
      </div>

      <button
        className={style.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className={`${style.bar} ${menuOpen ? style.bar1Open : ''}`} />
        <div className={`${style.bar} ${menuOpen ? style.bar2Open : ''}`} />
        <div className={`${style.bar} ${menuOpen ? style.bar3Open : ''}`} />
      </button>

      <div
        className={`${style.headerNav} ${
          menuOpen ? style.navOpen : ''
        }`}
      >
        <div className={style.navLinks}>
          <div className={style.navLink}>
            <Link href="/">Home</Link>
          </div>
          <div className={style.navLink}>
            <Link href="/about">About</Link>
          </div>
          <div className={style.navLink}>
            <Link href="/tracks/course">Training</Link>
          </div>
           <div className={style.navLink}>
            <Link href="/coworkSpace">Co-Workspace</Link>
          </div>
          <div className={style.navLink}>
            <Link href="/">Contact us</Link>
          </div>
          <div className={style.navLink}>
            <Link href="/auth/mentorRegister">Apply as a Mentor</Link>
          </div>
        </div>
     
      </div>
      <div className={style.navButton}>
          {isHome && (
            <button
              onClick={() => router.push('/auth/register')}
              className="primaryBtn"
            >
              Register
            </button>
          )}
      </div>

          <div className={style.navButton}>
          {isAbout && (
            <button
              onClick={() => router.push('/auth/register')}
              className="primaryBtn"
            >
              Register
            </button>
          )}
        </div>
       
    
    </section>
  );
};

export default Header;
