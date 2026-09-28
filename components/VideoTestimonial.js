import styles from '../styles/Home.module.css'
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function VideoTestimonial() {

    const videos = [
  "yBHS0QP4ToM",
  "7iyV_Le6Jt4",
   "TJIyMrUdbF4",
  "vMi7WA7IjbE",
  "N8kT6UatLq4",
];

  const scrollVideos = (direction) => {
    const track = document.getElementById('video-testimonials-track');
    if (track) {
      track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.videoTestimonials}>
      <div className={styles.videoTestimonialsIntro}>
        <h2>Hear From Our Students</h2>
        <p>Real experiences from members of the Samic Tech Hub community.</p>
      </div>

      <div className={styles.videoTestimonialsCarousel}>
        <button
          className={styles.videoCarouselButton}
          type="button"
          aria-label="Show previous videos"
          onClick={() => scrollVideos(-1)}
        >
          <ChevronLeft size={24} />
        </button>

        <div className={styles.videoTestimonialsGrid} id="video-testimonials-track">
        {videos.map((videoId, index) => (
          <div className={styles.videoCard} key={videoId}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`Student testimonial ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ))}
        </div>

        <button
          className={styles.videoCarouselButton}
          type="button"
          aria-label="Show next videos"
          onClick={() => scrollVideos(1)}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}