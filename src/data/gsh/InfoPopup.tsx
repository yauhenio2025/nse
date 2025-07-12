// src/topic/gsh/InfoPopup.tsx

import React from 'react';
import styles from './InfoPopup.module.css';

interface Props {
  content: string;
  onClose: () => void;
}

const InfoPopup: React.FC<Props> = ({ content, onClose }) => {
  return (
    <div className={styles.infoPopup} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closePopup} onClick={onClose}>✕</span>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default InfoPopup;