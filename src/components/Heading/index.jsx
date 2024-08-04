import React from 'react';
import styles from './Heading.module.css';
import Button from '../Button';


const Heading = () => {
  return (
    <h1 title="qwerty" className={styles.heading}>
      Hi!
      <Button content="!!!" number="000"/>
      <em className={styles.inside}>Qwerty</em>
    </h1>
  );
};

export default Heading;
