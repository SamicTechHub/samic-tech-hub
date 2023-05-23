import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import ProfileTestimonial from '../components/ProfileTestimonial'
import style from '../styles/Home.module.css'
import { useRouter } from 'next/router'

function About() {
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
            <button onClick={()=>router.push("/auth/register")} className='primaryBtn'>Register</button>
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
            <p>Samic Tech Hub is on a mission to nurture Africa's greatest talents. We believe that Africa has a wealth of untapped talent, and we are committed to helping young Africans develop the skills and knowledge they need to succeed in the global economy.

We do this by providing high-quality, affordable education and training in the areas of technology, entrepreneurship, and leadership. We also offer a variety of support services, such as career counseling, job placement assistance, and mentorship.

Our goal is to help young Africans reach their full potential and make a positive impact on the world. We believe that by nurturing Africa's greatest talents, we can help to build a more prosperous and equitable future for all. </p>
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
                <h3>Excellence</h3>
                <p>Samic Tech Hub is committed to providing high-quality education and training. We believe that excellence is essential for success. </p>
              </div>
            </div>
            <div className={style.takeLeadItem}>
              <div className={style.takeLeadItemImage}>
                <Image src={"/img/development.png"} alt={"Samic Tech Hub"} layout={"fill"}  />
              </div>
              <div className={style.takeLeadItemTexts}>
                <h3>Innovation</h3>
                <p>Samic Tech Hub is always looking for new and innovative ways to teach and learn. We believe that innovation is essential for progress. </p>
              </div>
            </div>
            <div className={style.takeLeadItem}>
              <div className={style.takeLeadItemImage}>
                <Image src={"/img/work.png"} alt={"Samic Tech Hub"} layout={"fill"}  />
              </div>
              <div className={style.takeLeadItemTexts}>
                <h3>Collaboration</h3>
                <p>Samic Tech Hub is a community of learners. We believe that by working together, we can achieve more than we can alone. </p>
              </div>
            </div>
            <div className={style.takeLeadItem}>
              <div className={style.takeLeadItemImage}>
                <Image src={"/img/flexible.png"} alt={"Samic Tech Hub"} layout={"fill"}  />
              </div>
              <div className={style.takeLeadItemTexts}>
                <h3>Impact</h3>
                <p>We are committed to making a positive impact on the world. We believe that by investing in young Africans, we can help to build a more prosperous and equitable future for all. </p>
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
          <h6>Join us at Samic Tech Hub today!</h6>
          <p>Samic Tech Hub is on a mission to nurture Africa's greatest talents. We believe that Africa has a wealth of untapped talent, and we are committed to helping young Africans develop the skills and knowledge they need to succeed in the global economy.</p>
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