import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { personalInfo } from "../../data/data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Fonction pour détecter la section active au scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollY = window.scrollY + 100; // Offset pour déclenchement anticipé

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour basculer le menu burger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fonction pour fermer le menu après clic sur un lien
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Fonction pour gérer le clic sur un lien et mettre à jour la section active
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    closeMenu();
  };

  // Liens de navigation
  const navLinks = [
    { id: "home", name: "Accueil", href: "#home" },
    { id: "about", name: "À Propos", href: "#about" },
    { id: "skills", name: "Compétences", href: "#skills" },
    { id: "projects", name: "Projets", href: "#projects" },
    { id: "contact", name: "Contact", href: "#contact" },
  ];

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          {/* Logo / Nom */}
          <div className={styles.logo}>
            <a
              href="#home"
              onClick={() => handleNavClick("home")}
              className={activeSection === "home" ? styles.activeLogo : ""}
            >
              {personalInfo.name}
            </a>
          </div>

          {/* Navigation Desktop */}
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`${styles.navLink} ${
                    activeSection === link.id ? styles.active : ""
                  }`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.name}
                  {/* Indicateur visuel pour l'item actif */}
                  <span className={styles.activeIndicator}></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Bouton Menu Burger (Mobile) */}
          <button
            className={`${styles.menuButton} ${
              isMenuOpen ? styles.active : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Menu Mobile */}
          <div
            className={`${styles.mobileMenu} ${
              isMenuOpen ? styles.active : ""
            }`}
          >
            <ul className={styles.mobileNavLinks}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`${styles.mobileNavLink} ${
                      activeSection === link.id ? styles.active : ""
                    }`}
                    onClick={() => handleNavClick(link.id)}
                  >
                    {link.name}
                    {/* Indicateur pour mobile */}
                    {activeSection === link.id && (
                      <span className={styles.mobileActiveDot}>●</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
