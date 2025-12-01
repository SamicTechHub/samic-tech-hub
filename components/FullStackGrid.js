import React from 'react';
import Styles from '../styles/courseGrid.module.css';
import ArticleIcon from '@mui/icons-material/Article';
import EmojiEventsSharpIcon from '@mui/icons-material/EmojiEventsSharp';

const CourseGrid = () => {
  const programs = [
    {
      id: 1,
      icon: <ArticleIcon style={{ fontSize: '2rem', color: '#27beab' }} />,
      title: 'Programme Overview',
      details:'This program takes you through the complete web development journey, covering both front-end and back-end technologies You’ll learn how to create dynamic, responsive, and functional web applications from scratch, equipping you with the skills to work independently or as part of a development team.',
      icon2: <EmojiEventsSharpIcon style={{ fontSize: '2rem', color: '#27beab' }} />,
      subTitle: 'Career Benefit',
      subDetails: 'Upon completion, you’ll be equipped to take on roles as a full-stack developer, web application developer, or software engineer Whether working with a tech company or freelancing, you’ll have the expertise to build, deploy, and manage professional-grade websites and applications.',
      color: '#FAFCFC',
    },
    {
      id: 2,
      title: 'Course Outline',
      courseIcon: <ArticleIcon style={{ fontSize: '2rem', color: '#27beab' }} />,
      courses: ["Front-End Development: HTML5, CSS3, JavaScript, Bootstrap 5, React.js",  "Back-End Development: PHP, Laravel, Python", "Database Management: MySQL", "Advanced Web Techniques: AJAX, RESTful API integration", "Version Control & Hosting: Git/GitHub, hosting projects on remote servers"," Capstone Project"],
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
