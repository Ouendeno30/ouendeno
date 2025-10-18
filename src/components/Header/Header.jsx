import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { personalInfo } from "../../data/data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  // Détection de la taille d'écran
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px est une breakpoint courante pour mobile
    };

    // Vérifier au chargement
    checkScreenSize();

    // Écouter les changements de taille
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Fonction pour détecter la section active au scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollY = window.scrollY + 100;

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    closeMenu();
  };

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

          {/* Navigation Desktop - cachée sur mobile */}
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
                  <span className={styles.activeIndicator}></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Bouton Menu Burger - affiché uniquement sur mobile */}
          {isMobile && (
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
          )}

          {/* Menu Mobile - affiché uniquement sur mobile */}
          {isMobile && (
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
                      {activeSection === link.id && (
                        <span className={styles.mobileActiveDot}>●</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
