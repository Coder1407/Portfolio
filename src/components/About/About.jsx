import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/about.png")} 
                alt="me sitting with a laptop"
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                  <img 
                    src={getImageUrl("about/cursorIcon.png")}
                    alt = "Cursor Icon"
                  />
                  <div className={styles.aboutItemText}>
                    <h3>FrontEnd Developer</h3>
                    <p>
                      I'm a frontend developer passionate of building responsive 
                      and optimized sites 
                    </p>
                  </div>
                </li>

                <li className={styles.aboutItem}>
                  <img 
                    src={getImageUrl("about/serverIcon.png")}
                    alt = "Cursor Icon"
                  />
                  <div className={styles.aboutItemText}>
                    <h3>Java Programmer</h3>
                    <p>
                      Passionate Java programmer with a knack for crafting elegant solutions.
                    </p>
                  </div>
                </li>

                <li className={styles.aboutItem}>
                  <img 
                    src={getImageUrl("about/uiIcon.png")}
                    alt = "Cursor Icon"
                  />
                  <div className={styles.aboutItemText}>
                    <h3>Cloud Engineer</h3>
                    <p>
                      Enthusiastic beginner cloud engineer passionate about leveraging cloud technologies to drive innovation and efficiency.
                    </p>
                  </div>
                </li>
            </ul>
        </div>
    </section>
  );
};
