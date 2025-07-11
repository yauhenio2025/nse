import React from 'react';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="container">
        <header className="header">
          <h1 className="header-title">EduForge</h1>
          <p className="header-subtitle">
            Transform Your Academic Texts into Interactive Learning Experiences
          </p>
        </header>
        {children}
      </div>
    </div>
  );
};