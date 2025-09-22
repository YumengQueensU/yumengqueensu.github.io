import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // 导入react-scroll库中的Link组件
import { Affix, Menu } from 'antd';
import './Header.css';

const Header = () => {
  const [bgColor, setBgColor] = useState('#f6f4e8');
  const [textColor, setTextColor] = useState('#000000');  // 初始文本颜色为黑色

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBgColor('#22272d'); // 滚动时变更为深色背景
        setTextColor('#ffffff'); // 滚动时变更为白色文本
      } else {
        setBgColor('#f6f4e8'); // 初始为浅色背景
        setTextColor('#000000'); // 初始为黑色文本
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Affix offsetTop={0}>
      <Menu mode="horizontal" style={{ backgroundColor: bgColor }}>
        <Menu.Item key="home" style={{ color: textColor }}>
          <Link to="homeIntro" smooth={true} duration={500}>Home</Link>
        </Menu.Item>
        <Menu.SubMenu key="projects" title={<span style={{ color: textColor }}>Projects</span>}>
          {['Full Stack Development', 'Game Development', 'AI Engineering'].map((skill, index) => (
            <Menu.Item key={index}>
              <Link to={skill.toLowerCase().replace(/\s/g, '')} smooth={true} duration={500}>
                {skill}
              </Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
        <Menu.Item key="cv" style={{ color: textColor }}>
          <a href="/docs/CV-Yumeng_Si.pdf" target="_blank" rel="noopener noreferrer" style={{ color: textColor }}>
            My Resume
          </a>
        </Menu.Item>
      </Menu>
    </Affix>
  );
};

export default Header;
