import React from 'react'

const Header = () => {
  return (
    <>
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
    </>
  )
}

export default Header