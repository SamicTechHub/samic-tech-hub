import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import ProfileTestimonial from '../components/ProfileTestimonial'
import Sidebar from '../components/Sidebar'
import style from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MentorRegisterModal from "../components/mentorRegisterModal"; // your modal component




export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

//   const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };
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
            <button onClick={()=>router.push("/auth/register")} className='primaryBtn'>Become the Next Talent  →</button>
            <button onClick={()=>router.push("/auth/mentorRegister") } className='secondaryBtn'>Apply As A Mentor  →</button>
       
          </div>

        </div>
        <div className={style.heroBanner}>
            <div className={style.pryCircle}></div>
            <div className={style.circleOutline}></div>
            <Image className={style.scale} src={"/img/heroImg.png"} alt={"Samic Tech Hub"} layout={"fill"} objectFit={"contain"} objectPosition={"bottom"} />
            <div className={style.heroMessage2}>
              <ProfileTestimonial userImage={"/img/student1.png"} message={"Samic Tech Hub offers a comprehensive curriculum that covers all aspects of web development."} name={"Zainab Moses"} />
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
            <p>Samic Tech Hub is a web development school that helps students learn the skills they need to build successful careers in the tech industry. Our curriculum is comprehensive and covers all aspects of web development, from HTML and CSS to JavaScript and React. We also offer a variety of support resources, including a forum, a chat room, and a mentorship program.
              <br />
              
              We are proud to have helped thousands of students learn web development and launch successful careers. We are committed to providing our students with the best possible education, and we are confident that we can help you achieve your goals. </p>
          </div>
          <button className='primaryBtn' onClick={()=>router.push("/findOutMore")}>Find Out More →</button>
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
  <Swiper
    modules={[Autoplay, Pagination]}
    spaceBetween={150}
    slidesPerView={1}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }}
  >
    {/* Program 1 */}
    <div className={style.programs}>
    <SwiperSlide >
      <div className={style.program} >
        <div className={style.svgContainer}>
          <Image src={"/img/Vector.svg"} alt={"Samic Tech Hub"} layout={"fill"} objectFit={"contain"} />
        </div>
        <h3>Software Development (Frontend/Backend)</h3>
        <p>Learn how to build web applications with solid backend logic and responsive frontend interfaces using modern frameworks and tools.</p>
      </div>
    </SwiperSlide>

    {/* Program 2 */}
    <SwiperSlide>
      <div className={style.program} style={{ backgroundColor: "#e6dc7f" }}>
        <div className={style.svgContainer}>
          <Image src={"/img/Vector.svg"} alt={"Samic Tech Hub"} layout={"fill"} objectFit={"contain"} />
        </div>
        <h3>Digital Marketing</h3>
        <p>Master the art of online marketing, content creation, and campaign strategies that drive real business growth.</p>
      </div>
    </SwiperSlide>

    {/* Program 3 */}
    <SwiperSlide>
      <div className={style.program} style={{ backgroundColor: "#FFFF" }}>
        <div className={style.svgContainer}>
          <Image src={"/img/Vector2.svg"} alt={"Samic Tech Hub"} layout={"fill"} objectFit={"contain"} />
        </div>
        <h3 style={{ color: 'black'}}>UX/UI Design</h3>
        <p style={{ color: 'black'}}>Design beautiful, user-friendly interfaces and experiences that solve real problems for real users.</p>
      </div>
    </SwiperSlide>

    {/* 🔁 Add More Programs Below */}
    <SwiperSlide>
      
      <div className={style.program}>
        <div className={style.svgContainer}>
          <Image src={"/img/Vector.svg"} alt={"Samic Tech Hub"} layout={"fill"} objectFit={"contain"} />
        </div>
        <h3>Product Management</h3>
        <p>Learn how to manage digital products from ideation to execution with strategic planning and agile tools.</p>
      </div>
    </SwiperSlide>
</div>
  </Swiper>
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

            <p>Samic Tech Hub gave me the skills and confidence to pursue a career in web development. The curriculum was comprehensive and well-organized, and the instructors were experienced and knowledgeable. I was able to learn at my own pace and get help when I needed it. I am now working as a web developer.</p>

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


      {/* Footer Section */}
      <section className={style.footerSection}>
        <Footer />
      </section>

      {/* <Sidebar /> */}
    </>
  )
}
