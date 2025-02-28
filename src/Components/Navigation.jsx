import React, { useState, useEffect } from 'react';
import '../Css/style.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav>
      <ul>
        <li className={activeSection === 'home' ? 'active' : ''}>
          <a href="#home">Home</a>
        </li>
        <li className={activeSection === 'proposal' ? 'active' : ''}>
          <a href="#proposal">Proposal</a>
        </li>
        <li className={activeSection === 'more-about-you' ? 'active' : ''}>
          <a href="#more-about-you">About</a>
        </li>
        <li className={activeSection === 'thank-you' ? 'active' : ''}>
          <a href="#thank-you">Thank You</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
