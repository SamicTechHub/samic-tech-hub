import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import ProfileTestimonial from '../components/ProfileTestimonial'
import Sidebar from '../components/Sidebar'
import style from '../styles/Home.module.css'
import { useRouter } from 'next/router' 


export default function Home() {
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

      {/* Mobiile Sidebar */}
      
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

            </div>
            <div className={style.navButton}>
              <button onClick={()=>router.push("/auth/register")} className='primaryBtn'>Register</button>
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
            <div className={style.statContainer}>
              <h1>200+</h1>
              <p>Students Trained</p>
            </div>
            <div className={style.statContainer}>
              <h1>30+</h1>
              <p>Job offer Received</p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className={style.ourProgramSection}>
        <Image src={"/img/Union1.png"} alt={"Samic Tech Hub"} layout={"fill"} objectFit={"contain"} />
        <Image src={"/img/Union2.png"} alt={"Samic Tech Hub"} layout={"fill"} objectFit={"contain"} />
        <div className={style.description}>
          <h2>Our Programs</h2>
          <p>We reduce risk through consulting & security product expertise. We are a trusted advisor for all cyber security</p>
        </div>

        <div className={style.programs}>

          <div className={style.program}>
            <div className={style.svgContainer}>
              <Image src={"/img/Vector.svg"} alt={"Samic Tech Hub"} layout={"fill"} objectFit={"contain"}/>
            </div>
            <h3>Web Designing</h3>
            <p>This program is designed to provide you with in-depth knowledge on how to create functional websites by implementing web designs through the use of various programming languages.</p>

            <button style={{color: "white"}}>Read More →</button>
          </div>
          <div className={style.program}>
            <div className={style.svgContainer}>
              <Image src={"/img/Vector.svg"} alt={"Samic Tech Hub"} layout={"fill"} objectFit={"contain"}/>
            </div>
            <h3>Digital Marketing</h3>
            <p>This program is designed to provide you with in-depth knowledge on how to create functional websites by implementing web designs through the use of various programming languages.</p>

            <button style={{color: "white"}}>Read More →</button>
          </div>
          <div className={style.program}>
            <div className={style.svgContainer}>
              <Image src={"/img/Vector2.svg"} alt={"Samic Tech Hub"} layout={"fill"} objectFit={"contain"}/>
            </div>
            <h3>UX/UI Design</h3>
            <p>This program is designed to provide you with in-depth knowledge on how to create functional websites by implementing web designs through the use of various programming languages.</p>

            <button style={{color: "#27BEAB"}}>Read More →</button>
          </div>


        </div>

      </section>

      {/* Take the Lead Section */}
      <section className={style.takeLeadSection}>
        <div className={style.takeLeadIntro}>
          <h3>Take the lead with Us</h3>
          <p>With the best-in-class training, and our commitment to lifelong learning, we have created an unrivaled opportunity to prepare, launch and grow your career.</p>
        </div>
        <div className={style.takeLeadItems}>
          <div className={style.takeLeadItem}>
            <div className={style.takeLeadItemImage}>
              <Image src={"/img/trend.png"} alt={"Samic Tech Hub"} layout={"fill"}  />
            </div>
            <div className={style.takeLeadItemTexts}>
              <h3>Future Proof</h3>
              <p>Focused on the high paying, in-demand fields of today and tomorrow.</p>
            </div>
          </div>
          <div className={style.takeLeadItem}>
            <div className={style.takeLeadItemImage}>
              <Image src={"/img/development.png"} alt={"Samic Tech Hub"} layout={"fill"}  />
            </div>
            <div className={style.takeLeadItemTexts}>
              <h3>Career Development</h3>
              <p>Gain access to a network of opportunities, and a community of peers and mentors to support your career growth.</p>
            </div>
          </div>
          <div className={style.takeLeadItem}>
            <div className={style.takeLeadItemImage}>
              <Image src={"/img/work.png"} alt={"Samic Tech Hub"} layout={"fill"}  />
            </div>
            <div className={style.takeLeadItemTexts}>
              <h3>Ready to Work</h3>
              <p>Focused on the high paying, in-demand fields of today and tomorrow.</p>
            </div>
          </div>
          <div className={style.takeLeadItem}>
            <div className={style.takeLeadItemImage}>
              <Image src={"/img/flexible.png"} alt={"Samic Tech Hub"} layout={"fill"}  />
            </div>
            <div className={style.takeLeadItemTexts}>
              <h3>Flexible</h3>
              <p>We understand you have a million other things to do. We have made learning flexible for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={style.testimonialSection}>
        <div className={style.testimonialIntro}>
          <h3>Don&apos;t just take our word for it, here&apos;s what our students say about us.</h3>
        </div>
        <div className={style.testimonials}>
          <div className={style.testimonial} >
            <div className={style.testimonialImageContainer}>
              <Image 
                src={"/img/testimonial1.png"}
                alt={"Samic Tech Hub"}
                layout={"fill"}
                objectFit={"cover"}
              />
            </div>

            <h3>&quot;The Best in town&quot;</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin. Orci nullam vitae amet ullamcorper scelerisque </p>

            <div className={style.testimonialUserDetails}>
              <h5>Emeka Afolayan</h5>
              <p>Freelance UX Designer</p>
            </div>

          </div>
          <div className={style.testimonial} >
            <div className={style.testimonialImageContainer}>
              <Image 
                src={"/img/testimonial2.png"}
                alt={"Samic Tech Hub"}
                layout={"fill"}
                objectFit={"cover"}
              />
            </div>

            <h3>&quot;Instant Job Offer&quot;</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin. Orci nullam vitae amet ullamcorper scelerisque </p>

            <div className={style.testimonialUserDetails}>
              <h5>Mariam Achur</h5>
              <p>Digital Marketer, NotMini</p>
            </div>

          </div>
          <div className={style.testimonial} >
            <div className={style.testimonialImageContainer}>
              <Image 
                src={"/img/testimonial3.png"}
                alt={"Samic Tech Hub"}
                layout={"fill"}
                objectFit={"cover"}
              />
            </div>

            <h3>&quot;They made it easy&quot;</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin. Orci nullam vitae amet ullamcorper scelerisque </p>

            <div className={style.testimonialUserDetails}>
              <h5>Oluwatoyin Abudu</h5>
              <p>Front End Designer, ButterStack</p>
            </div>

          </div>
        </div>
      </section>


      {/* Footer Section */}
      <section className={style.footerSection}>
        <Footer />
      </section>

      {/* <Sidebar /> */}
    </>
  )
}
