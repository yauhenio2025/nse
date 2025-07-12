// src/topic/gsh/components/AnimatedBackground.tsx

import React, { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;

    const bg = bgRef.current;
    
    // Clear existing particles
    bg.innerHTML = '';
    
    // Add wave elements
    for (let i = 0; i < 3; i++) {
      const wave = document.createElement('div');
      wave.className = styles.wave;
      wave.style.animationDelay = `${i * -5}s`;
      bg.appendChild(wave);
    }
    
    // Create 150 floating particles
    for (let i = 0; i < 150; i++) {
      const particle = document.createElement('div');
      particle.className = styles.floatingParticle;
      
      // Random positioning
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (15 + Math.random() * 20) + 's';
      
      // Variable sizes and opacity
      const size = 2 + Math.random() * 4;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.opacity = (0.1 + Math.random() * 0.4).toString();
      
      // Slight variations in color
      const hue = 30 + Math.random() * 60; // Orange to yellow range
      const saturation = 60 + Math.random() * 40;
      const lightness = 50 + Math.random() * 30;
      particle.style.background = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.3)`;
      
      bg.appendChild(particle);
    }
  }, []);

  return <div ref={bgRef} className={styles.bgAnimation} />;
};

export default AnimatedBackground;