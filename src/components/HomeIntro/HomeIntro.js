// HomeIntro.js
import React from 'react';
import { Typography } from 'antd';
import './HomeIntro.css';

const { Title, Paragraph } = Typography;

const HomeIntro = () => {
  return (
    <div className="home-intro-container" id="homeIntro">
      <div className="home-intro-left">
        <Title level={1}>My name is Yumeng Si</Title>
        <Title level={2}>Welcome to My Portfolio</Title>
        <Paragraph>
          This is a brief introduction to my website, showcasing my technical projects,
          visual work, and interdisciplinary background in digital humanities and computing.
        </Paragraph>
      </div>

      <div className="home-intro-right">
        <div className="image-stack">
          <img src="/images/S2P3.jpg" alt="Project 1" className="image-top" />
          <img src="/images/EconMC1.png" alt="Project 2" className="image-bottom" />
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
