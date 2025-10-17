import React from "react";
import styles from "./Skills.module.css";
import { skills } from "../../data/data";

const Skills = () => {
  return (
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className="container">
        {/* Titre de la section compétences */}
        <h2 className="title-section">Mes Compétences</h2>

        {/* Introduction */}
        <p className={styles.skillsIntro}>
          Au fil de mes expériences, j'ai acquis une expertise solide dans les
          technologies modernes du développement web.
        </p>

        {/* Grille des catégories de compétences */}
        <div className={styles.skillsGrid}>
          {skills.map((category, categoryIndex) => (
            <div key={category.category} className={styles.skillCategory}>
              {/* Titre de la catégorie */}
              <h3 className={styles.categoryTitle}>{category.category}</h3>

              {/* Liste des technologies dans cette catégorie */}
              <div className={styles.technologiesList}>
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className={styles.skillItem}
                    // Animation delay pour un effet d'apparition séquentiel
                    style={{
                      animationDelay: `${
                        categoryIndex * 0.2 + techIndex * 0.1
                      }s`,
                    }}
                  >
                    {/* En-tête de la compétence avec nom et pourcentage */}
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{tech.name}</span>
                      <span className={styles.skillPercentage}>
                        {tech.level}%
                      </span>
                    </div>

                    {/* Barre de progression visuelle */}
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillProgress}
                        style={{ width: `${tech.level}%` }}
                        // Animation de la barre de progression
                        data-level={tech.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section de conclusion avec points forts */}
        <div className={styles.skillsFooter}>
          <h4 className={styles.footerTitle}>Mes Points Forts</h4>
          <div className={styles.strengthsList}>
            <div className={styles.strengthItem}>
              💡 Résolution de problèmes complexes
            </div>
            <div className={styles.strengthItem}>
              🚀 Performance et optimisation
            </div>
            <div className={styles.strengthItem}>🎨 Sens du design et UX</div>
            <div className={styles.strengthItem}>
              🔧 Maintenance et évolutivité
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
