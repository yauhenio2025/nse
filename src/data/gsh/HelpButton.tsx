// src/topic/gsh/HelpButton.tsx

import React from 'react';
import styles from './HelpButton.module.css';

interface Props {
  onClick: () => void;
}

const HelpButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.helpBtn} onClick={onClick} title="Get Help">
      <span>?</span>
    </div>
  );
};

export default HelpButton;