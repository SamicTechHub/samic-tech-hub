import styles from '../styles/featuresection.module.css';
import Image from 'next/image'

const features = [
  {
    id: 1,
    
    description: "Samic Co-working Space is my productivity plug. As a content strategist, I've worked from several spaces, but this one gets it right.",
    icon: "/img/stars.png",
    title: 'Yinka A.',
    small: 'Content Strategist and Freelancer',
    highlight: false,
  },
  {
    id: 2,
    icon: "/img/stars.png",
    title: 'Daniel O.',
    description: "I hosted my first paid training here, and it wa seamless. The space has everything you need and nothing you don't.",
    highlight: true,
    small: 'Brand Coach'
  },
  {
    id: 3,
    icon: "/img/stars.png",
    title: 'Bolu F.',
    description: "As someone who works better at night, finding a 6am–9pm coworking setup is gold. No interruptions,stable light, and total peace.",
    highlight: false,
    small: 'UI/UX Designer'
  },
  
  {
    id: 4,
    icon: "/img/stars.png",
    title: 'Rita A.',
    description: "I started coming to Samic Coworking space in March. I've since launched a digital product, met a collaborator, and finally found peace to work at night!",
    highlight: false,
    small: 'Copywriter'
  },
  {
    id: 5,
    icon: "/img/stars.png",
    title: 'Josh O.',
    description: "I teach design. Hosting my classes here gives my students real comfort, fast Wi-Fi, and zero interruptions. Highly recommended.",
    highlight: false,
    small:'Creative Coach'
  },
]

export default function FeaturesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>Don't Believe Us,<span className={styles.span}> Hear from Our Patrons</span></h2>
        <p className={styles.para} >Real stories from real people who've found their productivity home at Samic Co-working space.</p>
      </div>

      <div className={styles.gridPatronage}>
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`${styles.card2} ${feature.highlight ? styles.cardHighlight : ''}`}
          >
            <p className={styles.cardDesc}>{feature.description}</p>
            <span className={styles.icon}>
              <Image
                src={feature.icon} 
                alt={feature.title}
                width={50}
                height={11}
              />
            </span>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <small className={styles.small}>{feature.small}</small>

          </div>
        ))}
      </div>

       
    </section>
  );
}