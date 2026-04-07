import styles from '../styles/pricingsection.module.css';
import Link from 'next/link';
import Image from 'next/image';

const plans = [
  {
    icon: '/img/Symbol.png',
    id: 'daily',
    period: 'Daily',
    price: 'NGN2,000',
    isFeatured: false,
    features: [
      '24/7 Power Supply',
      'Fast Speed Internet',
      'Access 9am - 5pm',
      'Normal office chair',
      'Fan',
    ],
  },
  {
    icon: '/img/Symbol3.png',
    id: 'weekly',
    period: 'Weekly',
    price: 'NGN10,000',
    isFeatured: true,
    features: [
      '24/7 Power Supply',
      'Fast Speed Internet',
      'Access 9am - 5pm',
      'Normal Office Chair',
      'Fan',
      'Including Saturday: ₦12,000',
    ],
  },
  {
    icon: '/img/Symbol2.png',
    id: 'monthly',
    period: 'Monthly',
    price: 'NGN40,000',
    isFeatured: false,
    features: [
      '24/7 Power Supply',
      'Fast Speed Internet',
      'Access 9am - 5pm',
      'Normal office chair',
      'Fan',
    ],
  },
];

export default function PricingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>Membership Pricing</h2>
        <div className={styles.divider}>
          <span className={styles.line} />
          <span className={styles.dot} />
          <span className={styles.line} />
        </div>
        <p className={styles.packageLabel}>Standard Package</p>
      </div>

      <div className={styles.grid}>
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`${styles.card} ${plan.isFeatured ? styles.featured : ''}`}
          >
            <div className={styles.iconWrapper}>
              <span className={styles.calIcon}>
                <Image
                  src={plan.icon}
                  alt={plan.period}
                  width={40}
                  height={40}
                />
              </span>
            </div>
            <h3 className={styles.period}>{plan.period}</h3>
            <p className={styles.price}>{plan.price}</p>
            <ul className={styles.featureList}>
              {plan.features.map((feat, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <span className={styles.check}>✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <Link href="/book" className={styles.bookBtn}>Book now</Link>
          </div>
        ))}
      </div>
    </section>
  );
}