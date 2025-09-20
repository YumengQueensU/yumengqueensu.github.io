// src/App.js

import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import HomeIntro from './components/HomeIntro/HomeIntro';
import SkillSlider from './components/SkillSlider/SkillSlider';
import Footer from './components/Footer/Footer';
import { skills } from './data/skillsData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ProjectDetail from './components/ProjectDetail/ProjectDetail'; 

const App = () => {
  return (
    <ConfigProvider
      theme={{ components: { Button: { textHoverBg: '#0000004d' } } }}
    >
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <HomeIntro />
                {skills.map(skill => (
                  <SkillSlider key={skill.name} skill={skill} />
                ))}
                <Footer />
              </div>
            }
          />
          {/* ⬇️ ProjectDetail 路由配置，使用 projectId 匹配 */}
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          

        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;
