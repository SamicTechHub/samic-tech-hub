"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import styles from "../styles/accordionfaq.module.css";

const faqs = [
  {
    id: "panel1",
    question: "What programs or courses do you offer?",
    answer:
      "We offer training in software development, product design (UI/UX), and digital marketing. Each program equips you with in-demand tech skills.",
  },
  {
    id: "panel2",
    question: "Do I need any prior experience to enroll?",
    answer:
      "No prior experience is needed. We have beginner-friendly courses and advanced options for learners with some background.",
  },
  {
    id: "panel3",
    question: "How long does the training last?",
    answer: "Training typically lasts 6 months. We offer full-time options.",
  },
  {
    id: "panel5",
    question: "Is the training online or in-person?",
    answer: "We offer physical classes.",
  },
  {
    id: "panel6",
    question: "What kind of jobs can I get after training?",
    answer:
      "You can apply for roles like software developer, UI/UX designer, digital marketer, product manager, or freelance tech roles.",
  },
  {
    id: "panel7",
    question: "Will I get a certificate?",
    answer: "Yes. You will receive a certificate of completion.",
  },
  {
    id: "panel8",
    question: "Are there payment plans or scholarships?",
    answer:
      "Yes, we offer flexible payment plans. Scholarships are also available to outstanding students.",
  },
  {
    id: "panel9",
    question: "Will I work on real-life projects?",
    answer:
      "Absolutely. Our training is hands-on and project-based.",
  },
  {
    id: "panel10",
    question: "How do I apply or register?",
    answer:
      "You can apply through our website or visit our center.",
  },
];

export default function AccordionFAQ() {
  const [expanded, setExpanded] = useState("panel1");

  const toggle = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>

      {faqs.map((faq) => {
        const isOpen = expanded === faq.id;

        return (
          <div
            key={faq.id}
            className={`${styles.accordion} ${isOpen ? styles.open : ""}`}
          >
            <button
              className={styles.summary}
              onClick={() => toggle(faq.id)}
            >
              <ChevronRight
                className={`${styles.icon} ${isOpen ? styles.rotate : ""}`}
                size={24}
              />
              <span className={styles.question}>{faq.question}</span>
            </button>

            {isOpen && (
              <div className={styles.details}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
