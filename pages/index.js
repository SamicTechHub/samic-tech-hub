import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import ProfileTestimonial from '../components/ProfileTestimonial'
import style from '../styles/Home.module.css'
import { useRouter, router } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import HeaderF from "../components/HeaderF"
import CustomizedAccordions from "../components/Accordion";
import Programs from '../components/Courses';
import TrainingBanner from '../components/TrainingBanner'




export default function Home() {


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  return (
    <>
      <Head>
        <title>Samic Tech Hub – Tech Skills Training, Co-Working Space, Software Studio in Ibadan, Moniya </title>
        <meta name="description" content="Samic Tech Hub offers tech skills training, web development programs in Ibadan, Moniya. A modern co-working space for freelancers, startups, remote workers, learners in Ibadan, Moniya. Our services also include software product studio where you can bring your business ideas to reality in Ibadan, Moniya." />
        <link rel="icon" href="/img/logoWBg.png" alt="icon" />
        <meta name="google-site-verification" content="8iH4pWVXAM3QoQVpbo0AUy3UqV67cVfcmI9SuwR5xOc" />
      </Head>

      {/* Mobiile Sidebar */}
      
      {/* Header Section */}

        <HeaderF />

      {/* Hero Section */}
      <section className={style.heroSectionContainer}>
        <div className={style.heroText}>
          <h1>Building Top <span className='emphasyBg'>Tech Talents</span> for the World</h1>
          <p>Gain the skills, experience and relationships that keep you ahead of the curve Learn tech and get hired fast - 100X Better</p>
          <div className={style.heroCTA}>
            <button onClick={()=>router.push("/auth/register")} className='primaryBtn'>Become the Next Talent  →</button>
            <button onClick={()=>router.push("/auth/mentorRegister") } className='secondaryBtn'>Apply As A Mentor  →</button>
       
          </div>
           

        </div>
        <div className={style.heroBanner}>
            <div className={style.pryCircle}></div>
            <div className={style.circleOutline}></div>
            <Image className={style.scale} src={"/img/heroImg.png"} alt={"Samic Tech Hub"} layout={"fill"} objectFit={"contain"} objectPosition={"bottom"} priority/>
            <div className={style.heroMessage2}>
              <ProfileTestimonial userImage={"/img/student1.png"} message={"Samic Tech Hub offers a comprehensive curriculum that covers all aspects of web development."} name={"Zainab Moses"} />
            </div>
            <div className={style.heroMessage1}>
              <ProfileTestimonial userImage={"/img/student2.png"} message={"One of the best UX curriculum I have ever used."} name={"Eniitan Uzor"} />
            </div>
        </div>
      </section>
      {/* Featured Section */}
      <section>
         <TrainingBanner />
      </section>

      {/* About us Section */}
      <section className={style.aboutSection}>
        <div className={style.aboutSectionText}>
          <h2>WHO WE ARE</h2>
          <div className={style.aboutDetails}>
            <h1>Shaping the Future of <span className='emphasyBg'>Work</span></h1>
            <p>Samic Tech Hub is a web development school that helps students learn the skills they need to build successful careers in the tech industry. Our curriculum is comprehensive and covers all aspects of web development, from HTML and CSS to JavaScript and React. We also offer a variety of support resources, including a forum, a chat room, and a mentorship program.
              <br />
              
              We are proud to have helped thousands of students learn web development and launch successful careers. We are committed to providing our students with the best possible education, and we are confident that we can help you achieve your goals. </p>
          </div>
          <button className='primaryBtn' onClick={()=>router.push("/about")}>Find Out More →</button>
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
      <Programs />


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

            <p>Samic Tech Hub gave me the skills and confidence to pursue a career in web development. The curriculum was comprehensive and well-organized, and the instructors were experienced and knowledgeable. I was able to learn at my own pace and get help when I needed it. I am now working as a web developer.</p>

            <div className={style.testimonialUserDetails}>
              <h5>'Segun Afolayan</h5>
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

            <p>I was unemployed for months after I graduated from college. I was starting to get discouraged when I found Samic Tech Hub. I enrolled in their web development program and was offered a job through their job placement program within a month of graduating.</p>

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

            <p>I've always been a visual learner, so I found it difficult to learn new programming languages from books and online courses. But when I found Samic Tech Hub, I knew I had found the perfect learning platform. The interactive lessons and engaging activities made learning fun and easy, and I was able to master new concepts quickly.</p>

            <div className={style.testimonialUserDetails}>
              <h5>Oluwatoyin Abudu</h5>
              <p>Front End Designer, ButterStack</p>
            </div>

          </div>
        </div>
      </section>
    {/* accordion section */} 
      {/* <CustomizedAccordions/> */}
      {/* Footer Section */}
      <section className={style.footerSection}>
        <Footer />
      </section>

      {/* <Sidebar /> */}
    </>
  )
}
