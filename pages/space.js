import BookingForm from '../components/BookingForm';
import styles from '../styles/space.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <BookingForm />
    </div>
  );
}
