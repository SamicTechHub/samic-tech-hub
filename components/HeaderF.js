import React, { useEffect, useState } from 'react';
import style from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const HeaderF = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === "/";
  const isAbout = router.pathname === "/about";

  const [open, setOpen] = useState(false);

  const handleRegister = () => {
    setOpen(false);
    router.push("/auth/register");
  };

  const handleFreeTraining = () => {
    setOpen(false);
    window.open("https://forms.gle/Yts4N5nocq36NyKy5", "_blank");
  };
  //  const handleChange = (e) => {
  //   const value = e.target.value;
  //   if (value === "register") {
  //     router.push("/auth/register");
  //   } else if (value === "freeTraining") {
  //     window.open("https://forms.gle/Yts4N5nocq36NyKy5", "_blank");
  //   }
  // }

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
          <Image src="/img/samictechlogo.png" alt="Samic Tech Hub" layout="fill"/>
        </div>
        <h1>Samic Tech Hub</h1>
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
           {/* <div className={style.navLink}>
            <Link href="/coworkSpace">Co-Workspace</Link>
          </div> */}
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
        <div className={style.dropdownWrapper}>
          <button
            className={style.primaryBtn}
            onClick={() => setOpen(!open)}
          >
            Register
            <span className={style.arrow}>▾</span>
          </button>

          {open && (
            <div className={style.dropdownMenu}>
              <div className={style.dropdownItem} onClick={handleRegister}>
                Register for Our Courses
              </div>
              <div className={style.dropdownItem} onClick={handleFreeTraining}>
                Register for the Free Training
              </div>
            </div>
          )}
        </div>
      )}
    </div>
    {/* <div className={style.navButton}>
       {isHome && (
            <button
              onClick={() => router.push('/auth/register')}
              className="primaryBtn"
            >
              Register
            </button>
          )}
    </div> */}
      

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

export default HeaderF;
