import React from "react";
import styles from "./Footer.module.css";
import { personalInfo } from "../../data/data";

const Footer = () => {
  // Obtenir l'année actuelle pour le copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Contenu principal du footer */}
        <div className={styles.footerContent}>
          {/* Section à propos */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>{personalInfo.name}</h3>
            <p className={styles.footerDescription}>
              Développeur Full-Stack & Designer UI/UX passionné par la création
              d'applications web et mobiles modernes. Spécialisé dans les
              solutions digitales innovantes adaptées au marché africain.
            </p>
          </div>

          {/* Liens rapides */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Navigation</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#home" className={styles.footerLink}>
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className={styles.footerLink}>
                  À Propos
                </a>
              </li>
              <li>
                <a href="#skills" className={styles.footerLink}>
                  Compétences
                </a>
              </li>
              <li>
                <a href="#projects" className={styles.footerLink}>
                  Projets
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.footerLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Liens sociaux COMPLETS */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Réseaux sociaux</h4>
            <div className={styles.socialLinks}>
              {/* GitHub - Développement */}
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Voir mes projets sur GitHub"
              >
                <span className={styles.socialIcon}>💻</span>
                GitHub
              </a>

              {/* LinkedIn - Professionnel */}
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Me contacter sur LinkedIn"
              >
                <span className={styles.socialIcon}>💼</span>
                LinkedIn
              </a>

              {/* Facebook - Contact personnel */}
              <a
                href={personalInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Me suivre sur Facebook"
              >
                <span className={styles.socialIcon}>📘</span>
                Facebook
              </a>

              {/* Twitter - Optionnel */}
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Me suivre sur Twitter"
              >
                <span className={styles.socialIcon}>🐦</span>
                Twitter
              </a>
            </div>
          </div>

          {/* Coordonnées de contact */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Contact direct</h4>
            <div className={styles.contactInfo}>
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}?subject=Contact%20depuis%20portfolio&body=Bonjour%20${personalInfo.name}%2C%0A%0AJe%20vous%20contacte%20après%20avoir%20vu%20votre%20portfolio.`}
                className={styles.contactLink}
                title="Envoyer un email"
              >
                <span className={styles.contactIcon}>📧</span>
                {personalInfo.email}
              </a>

              {/* Téléphone */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                className={styles.contactLink}
                title="Appeler"
              >
                <span className={styles.contactIcon}>📱</span>
                {personalInfo.phone}
              </a>

              {/* Localisation */}
              <div className={styles.contactLink}>
                <span className={styles.contactIcon}>📍</span>
                {personalInfo.location}
              </div>

              {/* CV */}
              <a
                href={personalInfo.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
                title="Télécharger mon CV"
              >
                <span className={styles.contactIcon}>📄</span>
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>

        {/* Barre de copyright et informations légales */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {currentYear} {personalInfo.name}. Tous droits réservés.
            <span className={styles.legalLinks}>
              {/* Tu peux ajouter des liens légaux si besoin */}
              {/* <a href="/privacy">Confidentialité</a> */}
              {/* <a href="/terms">Mentions légales</a> */}
            </span>
          </div>

          <div className={styles.madeWith}>
            Conçu et développé avec ❤️ par Ouendeno Saa Bernard
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
