import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from "../styles/Home.module.css"
import { useRouter } from 'next/router'

function HeaderW() {
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
  )
}

export default HeaderW
