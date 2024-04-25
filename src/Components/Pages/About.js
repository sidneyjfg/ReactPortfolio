import React, { useState } from 'react';

function About() {
  const [activeTab, setActiveTab] = useState('skills'); // Initial active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="about" id="About">
      <div className="about-content">
        <div className="row">
          <div className="about-col-1">
            <img id="profileAbout" src="../img/Sidney.jpg" alt="Sidney Junio"></img>
          </div>
          <div className="about-col-2">
            <h1 className="heading">About <span>Me</span></h1>
            <p align="justify">Sidney, 20 years old, Information Systems student at University Positivo (UP). Passionate about
              technology, he dedicates his free time to this area. Proactive and looking for challenges and opportunities
              to grow professionally. He aims to work on innovative projects and in the future combine travel with work,
              automating his home with artificial intelligence. Sociable, enjoys spending time with friends and family,
              and loves to travel and experience new cultures. Dedicated, proactive and always looking for personal and
              professional growth. Open to new projects and opportunities.
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('skills')}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('experience')}
              >
                Experience
              </p>
              <p
                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('education')}
              >
                Education
              </p>
            </div>
            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul>
                <li><span>App Development</span><br></br>Begginer in Building Android/iOS apps using Dart language</li>
                <li><span>BackEnd and FrontEnd Tecnologies</span><br></br>Tecnologies like HTML, CSS/Bootstrap, Javascript, python, django, C# and javascript</li>
                <li><span>Operational System</span><br></br>Development using Linux/Windows</li>
                <li><span>Databases</span><br></br>Implement database in applications like MySQL</li>
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
              <ul>
                <li><span>May 2023 - Current</span><br></br>Support Analyst using Linux as Operating System</li>
                <li><span>April 2023</span><br></br>Designing Web/App interfaces using CSS, HTML, Wordpress</li>
                <li><span>May 2022 - April 2023</span><br></br>Performed functions such as generating notes, entering transfer
                  and return notes and customer service</li>
                <li><span>June 2021</span><br></br>Development Websites E-commerce</li>
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                <li><span>2022 - 2026</span><br></br>System of Information - Puc Minas</li>
                <li><span>2018 - 2019</span><br></br>Computer Technician - SENAI</li>
                <li><span>2015 - 2016</span><br></br>English Language - FISK</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
