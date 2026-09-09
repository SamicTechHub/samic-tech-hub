import React from 'react';
import Styles from '../styles/courseGrid.module.css';
import { TbArticleFilled } from "react-icons/tb";
import { GiTrophyCup } from "react-icons/gi";

const CourseGrid = () => {
  const programs = [
    {
      id: 1,
      icon: <TbArticleFilled style={{ fontSize: '2rem', color: '#27beab' }} />,
      title: 'Programme Overview',
      details: 'This program introduces you to the world of cybersecurity, teaching you how to identify vulnerabilities, prevent attacks, and secure digital systems. you’ll  gain hands-on experience with security tools, network defense strategies, and risk management practices, preparing you to protect data and systems in real-world scenarios.',
      icon2: <GiTrophyCup style={{ fontSize: '3rem', color: '#27beab' }} />,
      subTitle: 'Career Benefit',
      subDetails: 'Upon completion, you’ll  be ready to pursue roles such as cybersecurity analyst, network security engineer, or information security specialist. Whether working with an organization or as a consultant, you’ll  have the expertise to protect systems, manage risks, and ensure the safety of digital assets.',
      color: '#FAFCFC',
    },
    {
      id: 2,
      title: 'Course Outline',
      courseIcon: <TbArticleFilled style={{ fontSize: '2rem', color: '#27beab' }} />,
      courses: [
        "Cybersecurity Fundamentals: Threats, vulnerabilities, and security principles",
        "Network Security: Firewalls, VPNs, intrusion detection and prevention systems",
        "Cryptography: Encryption, hashing, and secure communications",
        "Ethical Hacking: Penetration testing and vulnerability assessments",
        "Risk Management & Compliance: Security policies, governance, and industry standards",
        "Incident Response: Detecting, responding to, and recovering from attacks",
        "Capstone Project: Hands-on cybersecurity challenge and defense strategy presentation"
      ],
      color: '#E6DC7F',
    },
  ];

  return (
    <div className={Styles.gridContainer}>
      {programs.map((program, index) => (
        <div
          key={index}
          className={Styles.gridItem}
          style={{ backgroundColor: program.color }}
        >
          {program.title && 
            <h1 className={Styles.headings}>
              {program.icon && <span className={Styles.span}>{program.icon}</span>}
              {program.title}
            </h1>
          }

          {program.details && (
            <p className={Styles.paragraph1}>{program.details}</p>
          )}

          {program.icon2 && program.subTitle && (
            <h2 className={Styles.headings}>
              {program.icon2 && <span className={Styles.span}>{program.icon2}</span>}
              {program.subTitle}
            </h2>
          )}

          {program.subDetails && (
            <p className={Styles.paragraph2}>{program.subDetails}</p>
          )}

          {program.courses && Array.isArray(program.courses) && (
            <ul className={Styles.courseList}>
              {program.courses.map((course, idx) => (
                <li key={idx} className={Styles.courseItem}>
                  <div className={Styles.courseIconWrapper}>
                    {program.courseIcon}
                  </div>
                  <span className={Styles.courseText}>{course}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseGrid;