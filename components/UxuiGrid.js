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
      details: 'A UX/UI Design program teaches learners how to create user-friendly, visually appealing digital products like websites, apps, and software interfaces. The program typically covers User Experience (UX) principles—such as user research, wireframing, and usability testing—and User Interface (UI) design skills like layout, typography, color theory, and interactive prototyping. Learners use tools like Figma, Adobe XD, and Sketch to bring their designs to life.',
      icon2: <EmojiEventsSharpIcon style={{ fontSize: '2rem', color: '#27beab' }} />,
      subTitle: 'Career Benefit',
      subDetails: 'UX/UI Design offers strong career opportunities in today’s tech-driven world, as companies strive to deliver seamless digital experiences. Professionals in this field can pursue roles such as UX Designer, UI Designer, Product Designer, or Interaction Designer. These roles are in high demand across industries like tech, finance, healthcare, and e-commerce.In addition to attractive salaries, UX/UI careers offer creative freedom, flexible work options (including remote roles), and the chance to work on innovative products that impact real people. For those who enjoy both design and problem-solving, UX/UI Design provides a fulfilling career with room for continuous growth and specialization.',
      color: '#FAFCFC',
    },
    {
      id: 2,
      title: 'Course Outline',
      courseIcon: <ArticleIcon style={{ fontSize: '2rem', color: '#27beab' }} />,
      courses: ["Introduction to UX/UI Design",  "User Research & Analysis", "Information Architecture", "Wireframing & Prototyping", "Visual Design & UI Principles"," Design Tools & Software", "Interaction Design & Animation", "Usability Testing & Feedback", "Responsive & Mobile Design", " Design Systems & UI Kits", "Capstone Project"],
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
