import React from 'react';
import { Typography } from 'antd';
import './HomeIntro.css';

const { Title, Paragraph } = Typography;

const HomeIntro = () => {
  return (
    <div className="HomeIntro" id="homeIntro">  
      <Title level={1}>Welcome to My Portfolio</Title>
      <Paragraph>This is a brief introduction to my website.</Paragraph>
    </div>
  );
};

export default HomeIntro;
