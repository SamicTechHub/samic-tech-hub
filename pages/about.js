import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import ProfileTestimonial from '../components/ProfileTestimonial'
import style from '../styles/Home.module.css'

function About() {
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
          <h3 style={ {color: scrolled ? "grey" : "white"}}>Samic</h3>
        </div>

        <div className={style.headerNav}>
          <div className={style.navLinks}>
            <div className={style.navLink}>
              <Link href={"/"}>
                <a style={{color: "grey"}}>Home</a>
              </Link>
            </div>
            <div className={style.navLink}>
              <Link href={"/about"}>
                <a style={{color: "grey"}}>About</a>
              </Link>
            </div>

          </div>
          <div className={style.navButton}>
            <button className='primaryBtn'>Register</button>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className={style.aboutHeroSectionContainer}>
        <div className={style.aboutHeroText}>
          <h1>Building Top Tech Talents for the World</h1>
          <p>We are a Technology Workforce Development company that helps people learn premium technology skills physically and partners with companies to hire the best talents and invest in workforce development.</p>
        </div>
        <div className={style.aboutHeroImages}>
          <div className={style.worldImage}>
            <Image src={"/img/aboutHero.png"} alt={"About hero Image"} layout={"fill"} objectFit={"contain"} objectPosition={"bottom"} />
          </div>
          <div className={style.userHeroImages}>
            <div className={style.userHeroImage}>
              <Image
                src={"/img/user.png"}
                alt={"User"}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center"}
              />
            </div>
            <div className={style.userHeroImage}>
              <Image
                src={"/img/user3.png"}
                alt={"User"}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center"}
              />
            </div>
            <div className={style.userHeroImage}>
              <Image
                src={"/img/user2.png"}
                alt={"User"}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center"}
              />
            </div>
          </div>
          <div className={style.userHeroImages2}>
            <div className={style.userHeroImage}>
              <Image
                src={"/img/user3.png"}
                alt={"User"}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center"}
              />
            </div>
            <div className={style.userHeroImage}>
              <Image
                src={"/img/user2.png"}
                alt={"User"}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center"}
              />
            </div>
            <div className={style.userHeroImage}>
              <Image
                src={"/img/user1.png"}
                alt={"User"}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center"}
              />
            </div>
            <div className={style.userHeroImage}>
              <Image
                src={"/img/user4.png"}
                alt={"User"}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center"}
              />
            </div>

          </div>
        </div>
      </section>

      {/* About us Section */}
      <section className={style.aboutSection}>
        <div className={style.aboutSectionText}>
          <h2>MORE THAN JUST A COMPANY</h2>
          <div className={style.aboutDetails} style={{width: "100%"}}>
            <h1>We Are On A Mission To Nuture Africa&apos;s Greatest Talents.</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered all injected humour or randomised words which don&apos;t look even slightly believable but the majority have suffered all injected humour or randomised words which don&apos;t look even slightly believable. </p>
          </div>
        </div>
        <div className={style.aboutSectionImage}>
          <div className={style.imageContainer}>
            <Image src={"/img/tutors.png"} alt={"Samic Tech Hub"} layout={"fill"} objectFit={"contain"} objectPosition={"bottom"} />
          
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className={style.ourProgramSection}>
        <Image src={"/img/Union1.png"} alt={"Samic Tech Hub"} layout={"fill"} objectFit={"contain"} />
        <Image src={"/img/Union2.png"} alt={"Samic Tech Hub"} layout={"fill"} objectFit={"contain"} />
        <div className={style.description}>
          <h2>Our Core Values</h2>
          <p>We reduce risk through consulting & security product expertise. We are a trusted advisor for all cyber security</p>
        </div>

        <div className={style.takeLeadSection}>
          <div className={style.takeLeadIntro}>
            <h3>Why People Choose us</h3>
            <p>Samic Tech Hub has shown and prove to be the Best Tech Industry with a lot of Values</p>
          </div>
          <div className={style.takeLeadItems}>
            <div className={style.takeLeadItem}>
              <div className={style.takeLeadItemImage}>
                <Image src={"/img/trend.png"} alt={"Samic Tech Hub"} layout={"fill"}  />
              </div>
              <div className={style.takeLeadItemTexts}>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante malesuada imperdiet elementum nec. </p>
              </div>
            </div>
            <div className={style.takeLeadItem}>
              <div className={style.takeLeadItemImage}>
                <Image src={"/img/development.png"} alt={"Samic Tech Hub"} layout={"fill"}  />
              </div>
              <div className={style.takeLeadItemTexts}>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante malesuada imperdiet elementum nec. </p>
              </div>
            </div>
            <div className={style.takeLeadItem}>
              <div className={style.takeLeadItemImage}>
                <Image src={"/img/work.png"} alt={"Samic Tech Hub"} layout={"fill"}  />
              </div>
              <div className={style.takeLeadItemTexts}>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante malesuada imperdiet elementum nec. </p>
              </div>
            </div>
            <div className={style.takeLeadItem}>
              <div className={style.takeLeadItemImage}>
                <Image src={"/img/flexible.png"} alt={"Samic Tech Hub"} layout={"fill"}  />
              </div>
              <div className={style.takeLeadItemTexts}>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante malesuada imperdiet elementum nec. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className={style.ourMissionSection}>
        <div className={style.ourMissionImage}>
          <Image src={"/img/mission.png"} alt={"Mission"} layout={"fill"} objectFit={"cover"} objectPosition={"center"} />
        </div>
        <div className={style.ourMissionText}>
          <h1>We Are On A Mission To Nuture Africa&apos;s Greatest Talents.</h1>
          <h6>Proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.</p>
        </div>
      </section>

      {/* Footer Section */}
      <section className={style.footerSection}>
        <Footer />
      </section>
    </>
  )
}

export default About