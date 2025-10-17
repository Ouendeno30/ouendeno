import React, { useState } from "react";
import styles from "./Projects.module.css";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article
      className={`${styles.projectCard} ${
        project.featured ? styles.featured : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* En-tête de la carte avec badge featured */}
      {project.featured && (
        <div className={styles.featuredBadge}>⭐ Projet vedette</div>
      )}

      {/* Image du projet */}
      <div className={styles.projectImage}>
        {!imageLoaded && (
          <div className={styles.imageSkeleton}>
            <div className={styles.skeletonLoader}></div>
          </div>
        )}
        <img
          src={project.image}
          alt={`Capture d'écran du projet ${project.title}`}
          onLoad={() => setImageLoaded(true)}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />

        {/* Overlay avec actions au survol */}
        <div
          className={`${styles.projectOverlay} ${
            isHovered ? styles.active : ""
          }`}
        >
          <div className={styles.projectActions}>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.demoButton}
            >
              🌐 Voir la démo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.codeButton}
            >
              💻 Code source
            </a>
          </div>
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>

        <p className={styles.projectDescription}>{project.description}</p>

        {/* Technologies utilisées */}
        <div className={styles.technologies}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        {/* Date et statut (optionnel) */}
        <div className={styles.projectMeta}>
          <span className={styles.projectStatus}>✅ Terminé</span>
          {/* Tu peux ajouter une date si tu veux */}
          {/* <span className={styles.projectDate}>Jan 2024</span> */}
        </div>

        {/* Boutons d'action (version mobile/desktop) */}
        <div className={styles.projectFooter}>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerButton}
          >
            <span>🌐</span>
            Démo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerButton}
          >
            <span>💻</span>
            Code
          </a>
          {project.longDescription && (
            <button
              className={styles.detailsButton}
              onClick={() => alert(project.longDescription)}
            >
              <span>📖</span>
              Détails
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
