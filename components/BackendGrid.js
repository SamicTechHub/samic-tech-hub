
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
      details: 'The Backend Development program at Samic Tech Hub is designed to equip aspiring developers with the technical skills and real-world experience needed to build secure, scalable, and high-performing server-side applications.Over the course of this program, participants will gain hands-on experience with modern backend technologies, databases, APIs, and deployment practices. You will learn how to design and develop robust backend systems that power dynamic web and mobile applications.',
      icon2: <EmojiEventsSharpIcon style={{ fontSize: '2rem', color: '#27beab' }} />,
      subTitle: 'Career Benefit',
      subDetails: 'Learning backend development opens doors to high-demand, well-paying tech careers both locally and internationally. It equips you with the skills to build powerful server-side applications and qualify for remote or in-office roles as a backend or full-stack developer.',
      color: '#FAFCFC',
    },
    {
      id: 2,
      title: 'Course Outline',
      courseIcon: <ArticleIcon style={{ fontSize: '2rem', color: '#27beab' }} />,
      courses: ["Programming Fundamentals with JavaScript, Python, or PHP", "Database Management: MySQL","Server-side Framework like Laravel","Authentication & Security including JWT, OAuth, and password encryption", "Debugging & Testing backend applications effectively", "Version Control & Hosting: Git/GitHub, hosting projects on remote servers"," Capstone Project"],
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
