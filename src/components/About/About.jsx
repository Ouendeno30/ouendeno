import React from "react";
import styles from "./About.module.css";
import { aboutContent, personalInfo, projects } from "../../data/data";

/**
 * IMAGE DE PROFIL PERSONNELLE
 * Utilisation de ta photo locale située dans src/assets/
 * Format recommandé : JPG, PNG, WebP (400x400px pour une qualité optimale)
 */
import ProfileImage from "../../assets/profile.jpg"; // Chemin corrigé vers ton image

const About = () => {
  /**
   * CALCUL DES STATISTIQUES RÉELLES
   * Ces statistiques sont calculées automatiquement à partir de tes données
   * pour garantir la cohérence avec ton portfolio
   */
  const calculateRealStats = () => {
    // Récupère toutes les technologies de tous les projets
    const allTechnologies = projects.flatMap((project) => project.technologies);

    // Filtre les technologies uniques (pas de doublons)
    const uniqueTechnologies = [...new Set(allTechnologies)];

    return {
      yearsExperience: 2, // Ton expérience réelle en années
      projectsCount: projects.length, // Nombre réel de projets dans ton portfolio
      technologiesCount: uniqueTechnologies.length, // Nombre de technologies uniques maîtrisées
    };
  };

  // Appel de la fonction pour obtenir les statistiques actuelles
  const currentStats = calculateRealStats();

  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className="container">
        {/* Titre principal de la section */}
        <h2 className="title-section">À Propos de Moi</h2>

        <div className={styles.aboutContent}>
          {/* COLONNE IMAGE - Ta photo de profil personnelle */}
          <div className={styles.aboutImage}>
            <div className={styles.imageContainer}>
              <img
                src={ProfileImage}
                alt={`${personalInfo.name} - ${personalInfo.title}`}
                className={styles.profilePhoto}
                onError={(e) => {
                  // Fallback si l'image ne charge pas
                  e.target.src =
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
                  e.target.alt = "Photo de profil par défaut";
                }}
              />
              {/* Effet de superposition décoratif */}
              <div className={styles.imageOverlay}></div>
            </div>
          </div>

          {/* COLONNE TEXTE - Contenu informatif */}
          <div className={styles.aboutText}>
            {/* Biographie principale */}
            <p className={styles.bioParagraph}>{aboutContent.bio}</p>

            {/* Citation ou devise personnelle */}
            <blockquote className={styles.motto}>
              {aboutContent.motto}
            </blockquote>

            {/* SECTION STATISTIQUES - Chiffres clés */}
            <div className={styles.stats}>
              {/* Statistique 1 : Expérience professionnelle */}
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {currentStats.yearsExperience}+
                </span>
                <span className={styles.statLabel}>Années d'expérience</span>
              </div>

              {/* Statistique 2 : Projets réalisés */}
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {currentStats.projectsCount}+
                </span>
                <span className={styles.statLabel}>Projets réalisés</span>
              </div>

              {/* Statistique 3 : Technologies maîtrisées */}
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {currentStats.technologiesCount}+
                </span>
                <span className={styles.statLabel}>
                  Technologies maîtrisées
                </span>
              </div>
            </div>

            {/* CALL TO ACTION - Téléchargement du CV */}
            <div className={styles.cta}>
              <a
                href={personalInfo.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                📄 Télécharger Mon CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
