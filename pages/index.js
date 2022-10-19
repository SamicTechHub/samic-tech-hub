import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ProfileTestimonial from '../components/ProfileTestimonial'
import style from '../styles/Home.module.css'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

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
        <title>Samic Tech Hub</title>
        <meta name="description" content="The Hub for great Developers" />
        <link rel="icon" href="/img/logoWBg.png" />
      </Head>
      {/* Header Section */}
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
            <div className={style.navLink}>
              <Link href={"/services"}>
                <a>Services</a>
              </Link>
            </div>
          </div>
          <div className={style.navButton}>
            <button className='primaryBtn'>Contact Us</button>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className={style.heroSectionContainer}>
        <div className={style.heroText}>
          <h1>Building Top <span className='emphasyBg'>Tech Talents</span> for the World</h1>
          <p>Gain the skills, experience and relationships that keep you ahead of the curve Learn tech and get hired fast - 100X Better</p>
          <div className={style.heroCTA}>
            <button className='primaryBtn'>Become the Next Talent  →</button>
            <button className='secondaryBtn'>Apply As A Mentor  →</button>
          </div>
          <div className={style.happyStudents}>
            <div className={style.studentImages}>
              <div className={`${style.happyStudentImage} ${style.student1}`}></div>
              <div className={`${style.happyStudentImage} ${style.student2}`}></div>
              <div className={`${style.happyStudentImage} ${style.student3}`}></div>
            </div>
            <div className={style.happyStudentTexts}>
              <h2>2,291</h2>
              <p>Happy Students</p>
            </div>
          </div>
        </div>
        <div className={style.heroBanner}>
            <div className={style.pryCircle}></div>
            <div className={style.circleOutline}></div>
            <Image className={style.scale} src={"/img/heroImg.png"} alt={"Samic Tech Hub"} layout={"fill"} objectFit={"contain"} objectPosition={"bottom"} />
            <div className={style.heroMessage2}>
              <ProfileTestimonial userImage={"/img/student1.png"} message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc. adipiscing elit. Nunc. "} name={"Zainab Moses"} />
            </div>
            <div className={style.heroMessage1}>
              <ProfileTestimonial userImage={"/img/student2.png"} message={"One of the best UX curriculum I have ever used."} name={"Eniitan Uzor"} />
            </div>
        </div>
      </section>
      {/* Featured Section */}
      <section></section>

      {/* About us Section */}
      <section className={style.aboutSection}>
        <div className={style.aboutSectionText}>
          <h2>WHO WE ARE</h2>
          <div className={style.aboutDetails}>
            <h1>Shaping the Future of <span className='emphasyBg'>Work</span></h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered all injected humour or randomised words which do not look even slightly believable but the majority have suffered all injected humour or randomised words which do not look even slightly believable. </p>
          </div>
          <button className='primaryBtn'>Find Out More →</button>
        </div>
        <div className={style.aboutSectionImage}>
          <div className={style.imageContainer}>
            <Image src={"/img/aboutImage.png"} alt={"Samic Tech Hub"} layout={"fill"} objectFit={"contain"} objectPosition={"bottom"} />
          <div className={style.aboutStat}>
            <div></div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}
