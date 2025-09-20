// SkillSlider.js

import React, { useRef, useState, useEffect } from 'react';
import { Carousel, Typography, Button, Image } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './SkillSlider.css';

const { Title, Paragraph } = Typography;

const SkillSlider = ({ skill }) => {
  const [showArrows, setShowArrows] = useState(false);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  // ✅ 提取跳转逻辑函数
  const handleProjectClick = (project) => {
    if (project.id) {
      navigate(`/project/${project.id}`);
    }
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX } = event;
      const { innerWidth } = window;
      const threshold = 0.2 * innerWidth;
      setShowArrows(clientX < threshold || clientX > innerWidth - threshold);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="skill-slider-container" id={skill.name.toLowerCase().replace(/\s/g, '')}>
      <Carousel ref={carouselRef} dotPosition="bottom" effect="fade">
        {skill.projects.map((project, index) => (
          <div key={index} className="project-container">
            <div className="project-title-container">
              <Title level={1}>{skill.name}</Title>
              <Title level={2}>{project.title}</Title>
            </div>
            <div
              className="project-content-container"
              onClick={() => handleProjectClick(project)}  // ✅ 仅有 id 的项目才跳转
              style={{ cursor: project.id ? 'pointer' : 'default' }}
            >
              <div className="image-container">
                <Image src={project.imgUrl} preview={false} />
              </div>
              <div className="text-container">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="feature-container">
                    <Title level={3}>{feature.title}</Title>
                    <Paragraph>{feature.description}</Paragraph>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      {showArrows && (
        <>
          <Button type="text" className="arrow-button left-arrow" onClick={prev}>
            <LeftOutlined style={{ fontSize: '40px', fontWeight: 'bold' }} />
          </Button>
          <Button type="text" className="arrow-button right-arrow" onClick={next}>
            <RightOutlined style={{ fontSize: '40px', fontWeight: 'bold' }} />
          </Button>
        </>
      )}
    </div>
  );
};

export default SkillSlider;
