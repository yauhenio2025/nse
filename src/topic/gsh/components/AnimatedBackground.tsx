// src/topic/gsh/AnimatedBackground.tsx

import React, { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;

    // Create floating particles
    for (let i = 0; i < 150; i++) {
      const particle = document.createElement('div');
      particle.className = styles.floatingParticle;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (20 + Math.random() * 20) + 's';
      particle.style.width = (2 + Math.random() * 4) + 'px';
      particle.style.height = particle.style.width;
      particle.style.opacity = (0.1 + Math.random() * 0.3).toString();
      bgRef.current.appendChild(particle);
    }

    return () => {
      if (bgRef.current) {
        bgRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className={styles.bgAnimation} ref={bgRef}>
      <div className={styles.wave} />
    </div>
  );
};

export default AnimatedBackground;