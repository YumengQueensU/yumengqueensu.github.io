import React from 'react';
import { useParams } from 'react-router-dom';
import projectDetails from '../../data/projectData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
    return (
      <div className="project-detail-container">
        <h1>Project not found</h1>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      {/* 首部图片：直接使用 img 标签，在 CSS 中设置 1210px x 30vh 居中 */}
      <img className="hero-img" src={project.coverImg} alt={project.introTitle} />
      
      {/* 简介 */}
      <div className="intro-section">
        <h1 className="main-title">{project.introTitle}</h1>
        <p className="sub-description">{project.introSubtitle}</p>
      </div>

      {/* 内容段落：第 2 段强制左图右文 */}
      {project.sections.map((section, index) => {
        const classes = [
          'content-section',
          index === 1 ? 'force-image-left' : (section.reverse ? 'reverse' : '')
        ].filter(Boolean).join(' ');

        return (
          <div className={classes} key={index}>
            <div className="text">
              {section.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <div className="image">
              <img src={section.img} alt={`Section ${index + 1}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectDetail;