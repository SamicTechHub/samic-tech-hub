import Head from 'next/head';
import styles from '../styles/findOutMore.module.css'
import style from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRouter } from 'next/router';

export default function FindOutMore() {

    const [scrolled, setScrolled] = useState(false)
      const router = useRouter()

     useEffect(() => {
        window.onscroll = function () {
          if (window.scrollY > 30) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
      }, []);
  return (
    <>
      <Head>
      
        <link rel="icon" href="/img/logoWBg.png" />
        <title>Find Out More | Samic Tech Hub</title>
        <meta name="description" content="Learn more about Samic Tech Hub and how we're shaping the future of work." />
      </Head>
      <div>
        <section className={ scrolled ? `${style.headerContainer} ${style.headerBackground}` : `${style.headerContainer}`}>
          <div className={style.brandContainer}>
            <div className={style.logoContainer}>
              <Image src={"/img/logoGBg.png"} alt={"Samic Tech Hub"} layout={"fill"} />
            </div>
            <h3>Samic</h3>
          </div>

          <div className={style.headerNav}>
            <div className={style.navLinks}>
              <div className={style.navLink}>
                <Link href={"/"}>
                  <a>Home</a>
                </Link>
              </div>
              <div className={style.navLink}>
                <Link href={"/about"}>
                  <a>About</a>
                </Link>
              </div>

            </div>
            <div className={style.navButton}>
              <button onClick={()=>router.push("/auth/register")} className='primaryBtn'>Register</button>
            </div>
          </div>
        </section>
      </div>

      <main className={styles.pageContainer}>
        <section className={styles.heroSection}>
          <h1>Shaping the Future of Work</h1>
          <p>Join a community that’s transforming beginners into confident developers ready for the modern tech world.</p>
        </section>

        <section className={styles.sectionContent}>
          <h2>Who We Are</h2>
          <p>
            Samic Tech Hub is a web development school that helps students learn the skills they need to build successful
            careers in the tech industry. Our curriculum is comprehensive and covers all aspects of web development, from
            HTML and CSS to JavaScript and React.
          </p>
          <p>
            We also offer a variety of support resources, including a forum, a chat room, and a mentorship program. We are
            proud to have helped thousands of students learn web development and launch successful careers.
          </p>
          <p>
            We are committed to providing our students with the best possible education, and we are confident that we can
            help you achieve your goals.
          </p>
          <button onClick={()=>router.push('/auth/register')} className={styles.ctaButton}>Apply Now →</button>
        </section>
      
      </main>
        <Footer />
    </>
  );
}
