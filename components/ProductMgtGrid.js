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
      details: 'Learn how to guide digital products from concept to launch using agile methodologies and user-centered design. This program equips you with practical skills in product strategy, market research, and cross-functional leadership.',
      icon2: <GiTrophyCup style={{ fontSize: '3rem', color: '#27beab' }} />,
      subTitle: 'Career Benefit',
      subDetails: 'A background in product management opens doors to high-demand roles in tech companies, startups, and enterprises, where product managers lead cross-functional teams and influence business strategy. With these skills, you can advance into senior roles like Product Lead, Head of Product, or even transition into entrepreneurship or consulting.',
      color: '#FAFCFC',
    },
    {
      id: 2,
      title: 'Course Outline',
      courseIcon: <TbArticleFilled style={{ fontSize: '2rem', color: '#27beab' }} />,
      courses: ["Introduction to Product Management",  "Market Research & User Discovery", "Product Strategy & Roadmapping", "Agile & Lean Methodologies", "Design Thinking & UX Fundamentals","Product Development Process", "Go-to-Market Strategy", "Metrics & Product Analytics", "Stakeholder Communication & Leadership", "Capstone Project"],
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
