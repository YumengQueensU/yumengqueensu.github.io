import React, { useCallback } from 'react';
import { GithubOutlined, LinkedinOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import './Footer.css';

const Footer = () => {
  const copyToClipboard = useCallback((text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  }, []);

  return (
    <div className="footer-container">
      <div className="upper-section">
        <div className="contact-info">
          <div className="contact-details">
            <h3>Contact Information</h3>
            <div style={{ height: '20px' }}></div> {/* Empty space */}
            <p onClick={() => copyToClipboard('example@email.com')}><MailOutlined /> example@email.com</p>
            <p onClick={() => copyToClipboard('123-456-7890')}><PhoneOutlined /> 123-456-7890</p>
          </div>
          <div className="social-links">
            <h3>Social and Professional Links</h3>
            <div style={{ height: '20px' }}></div> {/* Empty space */}
            <p><a href="https://github.com/yourUsername" target="_blank" rel="noopener noreferrer"><GithubOutlined /> GitHub</a></p>
            <p><a href="https://www.linkedin.com/in/yourUsername" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /> LinkedIn</a></p>
          </div>
        </div>
        <div className="empty-space">
          {/* Reserved for future content */}
        </div>
      </div>
      
      <div className="lower-section">
      <hr />
        <p>All rights reserved ©2024 Your Name.</p>
      </div>
    </div>
  );
};

export default Footer;
