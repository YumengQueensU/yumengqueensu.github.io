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
      {/* 顶部大图 */}
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${project.coverImg})` }}
      />

      {/* 简介部分 */}
      <div className="intro-section">
        <h1 className="main-title">{project.introTitle}</h1>
        <p className="sub-description">{project.introSubtitle}</p>
      </div>

      {/* 内容段落：交错布局 */}
      {project.sections.map((section, index) => (
        <div
          className={`content-section ${section.reverse ? 'reverse' : ''}`}
          key={index}
        >
          <div className="text">
            {section.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          <div className="image">
            <img src={section.img} alt={`Section ${index + 1}`} />
          </div>
        </div>
      ))}

      {/* 嵌套 Streamlit 页面 */}
      {projectId === "marketplace" && (
        <div className="streamlit-embed">
          <h2>Interactive Portfolio Demo</h2>
          <iframe
            src="https://portfolio-optimisation-tmszbfem5wq8sqlvqbmb9c.streamlit.app/"
            width="100%"
            height="800"
            frameBorder="0"
            allow="fullscreen"
            title="Portfolio Streamlit App"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
