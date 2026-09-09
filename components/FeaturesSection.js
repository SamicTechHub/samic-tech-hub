import styles from '../styles/featuresection.module.css';
import Image from 'next/image'

const features = [
  {
    id: 1,
    icon: "/img/icon1.png",
    title: 'Fast and Free Internet',
    description: 'Enjoy reliable, high-speed internet to stay connected and productive at all times.',
    highlight: true,
  },
  {
    id: 2,
    icon: "/img/icon2.png",
    title: '24/7 Electricity',
    description: 'Work without interruptions with constant and dependable power supply.',
    highlight: false,
  },
  {
    id: 3,
    icon: "/img/icon3.png",
    title: 'Accommodation Available',
    description: 'Comfortable and convenient accommodation is available for people who need it.',
    highlight: false,
  },
  
];

const additionalFeatures = [
  {
    id: 4,
    icon: "/img/icon4.png",
    title: 'Conducive Working Environment',
    description: 'A peaceful, organized, and supportive space designed to help you work effectively.',
    highlight: false,
  },
  {
    id: 5,
    icon: "/img/icon5.png",
    title: 'Other Amenities',
    description: 'Access to additional facilities that make your work experience easier and more comfortable.',
    highlight: false,
  },
]

export default function FeaturesSection() {
  return (
    <section className={styles.featureSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>More Than Just A Workspace</h2>
        <div className={styles.divider}>
          <span className={styles.line} />
          <span className={styles.dot} />
          <span className={styles.line} />
        </div>
      </div>

      <div className={styles.grid}>
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`${styles.card} ${feature.highlight ? styles.cardHighlight : ''}`}
          >
            <span className={styles.icon}>
              <Image
                src={feature.icon} 
                alt={feature.title}
                width={20}
                height={20}
              />
            </span>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDesc}>{feature.description}</p>
          </div>
        ))}
      </div>

       <div className={styles.grid2}>
        {additionalFeatures.map((additionalFeature) => (
          <div
            key={additionalFeature.id}
            className={`${styles.card} ${additionalFeature.highlight ? styles.cardHighlight : ''}`}
          >
            <span className={styles.icon}>
              <Image
                src={additionalFeature.icon} 
                alt={additionalFeature.title}
                width={20}
                height={20}
              />
            </span>
            <h3 className={styles.cardTitle}>{additionalFeature.title}</h3>
            <p className={styles.cardDesc}>{additionalFeature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}