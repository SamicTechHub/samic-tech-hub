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
      details: 'A Digital Marketing program equips learners with the skills to promote brands, products, or services through online channels. The program typically covers key areas such as social media marketing, search engine optimization (SEO), search engine marketing (SEM), content creation, email marketing, and web analytics. Learners also get hands-on experience with tools like Google Ads, Meta Business Suite, and analytics platforms to track campaign performance and audience behavior.',
      icon2: <GiTrophyCup style={{ fontSize: '3rem', color: '#27beab' }} />,
      subTitle: 'Career Benefit',
      subDetails: 'Digital Marketing opens doors to a wide range of in-demand careers in both local and global markets. Roles such as social media manager, SEO specialist, digital strategist, content marketer, and paid ads expert are highly sought after by businesses aiming to grow their online presence. With digital transformation across industries, the need for skilled marketers continues to grow rapidly.',
      color: '#FAFCFC',
    },
    {
      id: 2,
      title: 'Course Outline',
      courseIcon: <TbArticleFilled style={{ fontSize: '2rem', color: '#27beab' }} />,
      courses: ["Digital Marketing Foundations",  "Social Media Marketing", "Search Engine Optimization (SEO)", "Search Engine Marketing (SEM) & Google Ads", "Email Marketing"," Content Marketing", "Web Analytics", "E-commerce & Affiliate Marketing", "Marketing Automation Tools", "Capstone Project"],
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
