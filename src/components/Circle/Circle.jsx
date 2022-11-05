import React from 'react';
import styles from './index.module.css'

const Circle = ({ circle }) => {

    const size = Math.random() * 60

  return (
    <span
      className={styles.circle}
      style={{
        width: 80 + size + 'px',
        height: 80 + size + 'px',
        left: Math.random() * 1000 + 'px',
      }}
    >
      <p style={{fontSize: size}}>{circle}</p>
    </span>
  )
};

export default Circle;