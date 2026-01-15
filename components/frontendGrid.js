
import React from 'react';
import Styles from '../styles/courseGrid.module.css';
import { TbArticleFilled } from "react-icons/tb";
import { GiTrophyCup } from "react-icons/gi";

const CourseGrid = () => {
 const programs = [
  {
    id: 1,
    icon: <TbArticleFilled  style={{ fontSize: '2rem', color: '#27beab' }} />,
    title: 'Programme Overview',
    details:
      'The Frontend Development program at Samic Tech Hub is designed to equip aspiring developers with the skills needed to build visually appealing, responsive, and user-friendly web interfaces. Participants will learn how to translate designs into functional websites using modern frontend tools and best practices. Throughout the program, students will gain hands-on experience building real-world projects and interactive user interfaces for web applications.',
    
    icon2: <GiTrophyCup style={{ fontSize: '3rem', color: '#27beab' }} />,
    subTitle: 'Career Benefit',
    subDetails:
      'Frontend development skills are highly sought after across industries. Graduates can pursue careers as frontend developers, UI developers, or web designers, with opportunities to work remotely or in-office while collaborating with global teams.',
    
    color: '#FAFCFC',
  },

  {
    id: 2,
    title: 'Course Outline',
    courseIcon: <TbArticleFilled  style={{ fontSize: '2rem', color: '#27beab' }} />,
    courses: [
      'Web Fundamentals: HTML5, CSS3, and Modern JavaScript',
      'Responsive Design & Mobile-First Development',
      'CSS Frameworks and Styling (Tailwind CSS)',
      'JavaScript Frameworks & Libraries (React)',
      'State Management and Component-Based Architecture',
      'API Consumption & Frontend- Backend Integration',
      'Version Control with Git & GitHub',
      'Deployment of Frontend Applications',
      'Capstone Frontend Project'
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
