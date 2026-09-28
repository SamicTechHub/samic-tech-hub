"use client";

import styles from "../styles/connect.module.css";
import { MapPin, MessageCircle, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  const handleGetDirections = () => {
    window.open(
      "https://maps.google.com/?q=Samic+Tech+Hub,+Beside+Azeez+Hotel,+J%26P+Area,+Moniya,+Ibadan",
      "_blank"
    );
  };

  const handleSendMessage = () => {
    window.open("https://wa.me/2349062843490", "_blank");
  };

  const handleSendEmail = () => {
    window.location.href = "mailto:samictec@gmail.com";
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>GET IN TOUCH</span>
        <h2 className={styles.title}>Let's Connect</h2>
        <p className={styles.subtitle}>
          Have questions or ready to book your workspace? We're here to help you
          get started.
        </p>
      </div>

      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          {/* Location Card */}
          <div className={styles.contactCard}>
            <Image
              src="/img/location.png"
              alt="Location Icon"
              width={28}
              height={28}
              className={styles.icon}
            />
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>LOCATION</span>
              <p className={styles.contactText}>
                No. 2, Samic Tech Hub, Opposite Azeez Restaurant, Bitemore Junction J&P, Moniya, Ibadan.
              </p>
              <button
                className={styles.linkButton}
                onClick={handleGetDirections}
              >
                Get Directions →
              </button>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className={styles.contactCard}>
            <Image
                src="/img/whatsapp.png"
                alt="WhatsApp Icon"
                width={28}
                height={28}
                className={styles.icon}
              />
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>WHATSAPP</span>
              <p className={styles.contactText}>Chat with us on WhatsApp</p>
              <button
                className={styles.linkButton}
                onClick={handleSendMessage}
              >
                Send Message →
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className={styles.contactCard}>
            <Image
              src="/img/message.png"
              alt="Email Icon"
              width={28}
              height={28}
              className={styles.icon}
            />
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>EMAIL</span>
              <p className={styles.contactText}>samictec@gmail.com</p>
              <button className={styles.linkButton} onClick={handleSendEmail}>
                Send Email →
              </button>
            </div>
          </div>

          {/* Follow Us */}
          <div className={styles.followCard}>
            <span className={styles.followTitle}>Follow Us</span>
            <div className={styles.socialLinks}>
              {/* Instagram */}
              <a
                href="https://instagram.com/samic_techhub"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <Image 
                src="/img/insta.png"
                  alt="Location Icon"
                  width={20}
                  height={20}
                />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1GCZQvcR1Z/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Facebook"
              >
                <Image 
                src="/img/facebook.png"
                  alt="Location Icon"
                  width={20}
                  height={20}
                />
                  
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@samic_techhub"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="TikTok"
              >
                 <Image 
                src="/img/tiktok.png"
                  alt="Location Icon"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column — Map */}
        <div className={styles.mapCard}>
          <div className={styles.mapHeader}>
            <div className={styles.mapTitleGroup}>
              <span className={styles.mapIcon}>
                <Image
                  src="/img/locate2.png"
                  alt="Location Icon"
                  width={20}
                  height={20}
                />
              </span>
              <span className={styles.mapTitle}>Our Location</span>
            </div>
            <button className={styles.directionsBtn} onClick={handleGetDirections}>
              Get Directions
            </button>
          </div>

          {/* Map Embed */}
          <div className={styles.mapEmbed}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0!2d3.8900!3d7.4300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSamic+Tech+Hub!5e0!3m2!1sen!2sng!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Samic Tech Hub Location"
            />

            {/* Map Overlay Card */}
            <div className={styles.mapOverlayCard}>
              <div className={styles.mapOverlayImages}>
                <Image
                  src="/img/coworkhoto3.png"
                  alt="Location Icon"
                  width={200}
                  height={100}
                />
                 <Image
                  src="/img/coworkhoto2.png"
                  alt="Location Icon"
                  width={200}
                  height={100}
                />
              </div>
              <div className={styles.mapOverlayInfo}>
                <strong className={styles.mapOverlayName}>
                  Samic Tech Hub
                </strong>
                <div className={styles.mapOverlayMeta}>
                  <span className={styles.mapRating}>
                    5.0 <Image src="/img/star.png" alt="Star" width={16} height={16} /> (4) · Coworking space
                  </span>
                </div>
                <div className={styles.mapOverlayStatus}>
                  <span className={styles.openBadge}>Open</span>
                  <span className={styles.closingTime}>Closes 5 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}