import React from 'react'

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Amitesh</h1>
        <p className={styles.description}>
            I'm a BTECH CSE student and currently studying in 4th year.
            Reach out if you'd like to learn more! 
        </p>
        <a href="mailto:amitesh1407@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/hero.png")} alt = "Hero image of me" className={styles.heroImg}></img>
     <div className={styles.topBlur} />
     <div className={styles.bottomBlur} />
  </section>
  );
}
