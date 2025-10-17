import React from "react";
import styles from "./Hero.module.css";
import { heroContent, personalInfo } from "../../data/data";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Bonjour, je suis{" "}
              <span className={styles.highlight}>{personalInfo.name}</span>
            </h1>
            <h2 className={styles.heroSubtitle}>{heroContent.title}</h2>
            <p className={styles.heroDescription}>{heroContent.description}</p>

            <div className={styles.heroButtons}>
              <a href="#projects" className="btn primary">
                {heroContent.cta.primary}
              </a>
              <a href="#contact" className="btn secondary">
                {heroContent.cta.secondary}
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.floatingElement}></div>
            <div className={styles.codeSnippet}>
              <pre>
                {`function Developer() {
  return {
    skills: ['React', 'JavaScript'],
    passion: 'Créer des solutions innovantes',
    available: true
  };
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
