import React, { useState } from "react";
import styles from "./Projects.module.css";
import { projects, personalInfo } from "../../data/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Extraire toutes les technologies uniques pour les filtres
  const allTechnologies = [
    "all",
    ...new Set(projects.flatMap((project) => project.technologies)),
  ];

  // Fonction pour filtrer les projets
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeFilter)
        );

  // Statistiques des projets
  const projectsStats = {
    total: projects.length,
    featured: projects.filter((p) => p.featured).length,
    technologies: allTechnologies.length - 1, // -1 pour 'all'
  };

  return (
    <section id="projects" className={`section ${styles.projectsSection}`}>
      <div className="container">
        {/* En-tête avec statistiques */}
        <div className={styles.projectsHeader}>
          <h2 className="title-section">Mes Projets</h2>
          <p className={styles.projectsIntro}>
            Découvrez une sélection de mes réalisations les plus significatives.
            Chaque projet représente un défi technique unique relevé avec
            passion.
          </p>

          {/* Statistiques rapides */}
          <div className={styles.projectsStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{projectsStats.total}</span>
              <span className={styles.statLabel}>Projets</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>
                {projectsStats.featured}
              </span>
              <span className={styles.statLabel}>Vedettes</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>
                {projectsStats.technologies}
              </span>
              <span className={styles.statLabel}>Technos</span>
            </div>
          </div>
        </div>

        {/* Filtres par technologie */}
        <div className={styles.filtersContainer}>
          <h3 className={styles.filtersTitle}>Filtrer par technologie :</h3>
          <div className={styles.filters}>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                className={`${styles.filterButton} ${
                  activeFilter === tech ? styles.active : ""
                }`}
                onClick={() => setActiveFilter(tech)}
              >
                {tech === "all" ? "📁 Tous" : tech}
                {tech !== "all" && (
                  <span className={styles.filterCount}>
                    {
                      projects.filter((p) => p.technologies.includes(tech))
                        .length
                    }
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Compteur de résultats */}
        <div className={styles.resultsInfo}>
          <p>
            {filteredProjects.length} projet
            {filteredProjects.length > 1 ? "s" : ""}
            {activeFilter !== "all" && ` avec ${activeFilter}`}
          </p>
        </div>

        {/* Grille des projets filtrés */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Message si aucun projet ne correspond au filtre */}
        {filteredProjects.length === 0 && (
          <div className={styles.noProjects}>
            <div className={styles.noProjectsIcon}>🔍</div>
            <h3>Aucun projet trouvé</h3>
            <p>Aucun projet ne correspond à la technologie "{activeFilter}"</p>
            <button
              className="btn secondary"
              onClick={() => setActiveFilter("all")}
            >
              Voir tous les projets
            </button>
          </div>
        )}

        {/* Section d'appel à action */}
        <div className={styles.ctaSection}>
          <h3>Vous avez un projet en tête ?</h3>
          <p>Discutons de la façon dont je peux vous aider à le concrétiser</p>
          <div className={styles.ctaButtons}>
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              🐱 Voir plus sur GitHub
            </a>
            <a href="#contact" className="btn secondary">
              💬 Discuter d'un projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
