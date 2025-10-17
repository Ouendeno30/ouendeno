/**
 * ===================================================================
 * FICHIER DE DONNÉES DU PORTFOLIO - OUENDENO SÂA BERNARD
 * ===================================================================
 *
 * Ce fichier centralise toutes les données affichées sur le portfolio.
 * Structure modulaire permettant une maintenance facile et des mises à jour rapides.
 *
 * Dernière mise à jour : Décembre 2024
 * Auteur : Ouendeno Sâa Bernard
 * ===================================================================
 */

/**
 * ===================================================================
 * 1. INFORMATIONS PERSONNELLES ET COORDONNÉES
 * ===================================================================
 * Utilisées dans : Header, Hero, Footer, Contact, About
 * ===================================================================
 */

export const personalInfo = {
  /**
   * Identité complète - Affichée dans le header et la section hero
   * Format : Prénom Nom
   */
  name: "Ouendeno Sâa Bernard",

  /**
   * Titre professionnel - Résume ton expertise principale
   * Apparaît sous le nom dans la hero section
   */
  title: "Développeur Full-Stack & Designer UI/UX",

  /**
   * Coordonnées de contact - Accessibles dans le footer et section contact
   * Format international recommandé pour le téléphone
   */
  email: "ouendenosabernard@gmail.com",
  phone: "+224 621 620 346",
  location: "Mamou, Guinée",

  /**
   * Lien vers le curriculum vitae
   * Le fichier doit être placé dans : public/assets/cv.pdf
   */
  cvLink: "/assets/cv.pdf",

  /**
   * Réseaux sociaux et plateformes professionnelles
   * Ordre recommandé : Professionnel → Personnel
   */
  socialLinks: {
    // Plateforme de code et collaboration
    github: "https://github.com/Ouendeno30",

    // Réseau professionnel principal
    linkedin: "https://www.linkedin.com/in/sâa-bernard-ouendeno-a03810374/",

    // Réseau social personnel/professionnel
    facebook: "https://facebook.com/bernard.ouendeno",

    // Plateforme de microblogging (optionnel)
    twitter: "https://twitter.com/ouendeno_bernard",
  },
};

/**
 * ===================================================================
 * 2. SECTION "À PROPOS DE MOI"
 * ===================================================================
 * Contenu textuel pour présenter ta personnalité et ta philosophie
 * ===================================================================
 */

export const aboutContent = {
  /**
   * Biographie professionnelle - 2-3 phrases maximum
   * Doit inclure :
   * - Ton rôle principal
   * - Tes domaines d'expertise
   * - Ta valeur ajoutée unique
   * - Ton positionnement géographique
   */
  bio: "Développeur full-stack polyvalent et designer UI/UX basé en Guinée, alliant expertise technique et sens créatif. Avec une maîtrise complète des technologies modernes (React, Flutter, Node.js), des solutions d'entreprise (WinDev, WordPress) et des outils de design (Figma, Canva), je crée des expériences digitales exceptionnelles. Mon approche intègre l'IA pour optimiser les processus et anticiper les tendances, garantissant des solutions innovantes et performantes adaptées au marché africain.",

  /**
   * Devise ou citation personnelle - Court et impactant
   * Apparaît comme un bloc citation stylisé
   * Doit refléter ta vision et tes valeurs
   */
  motto:
    "Fusionner la puissance du code, l'élégance du design et l'intelligence artificielle pour créer l'avenir digital de l'Afrique.",
};

/**
 * ===================================================================
 * 3. COMPÉTENCES TECHNIQUES
 * ===================================================================
 * Organisées par catégories logiques avec niveaux de maîtrise
 * Niveaux : 0-100% (affichés avec barres de progression)
 * ===================================================================
 */

export const skills = [
  {
    /**
     * CATÉGORIE 1 : Technologies client-side et mobiles
     * Tout ce qui s'exécute côté navigateur ou appareil mobile
     */
    category: "Développement Frontend & Mobile",
    technologies: [
      { name: "React", level: 90 }, // Library JavaScript - Interfaces utilisateur
      { name: "Flutter", level: 80 }, // Framework Google - Apps cross-platform
      { name: "JavaScript", level: 85 }, // Langage web - Interactivité des pages
      { name: "TypeScript", level: 80 }, // JavaScript typé - Développement robuste
      { name: "HTML/CSS", level: 95 }, // Fondations web - Structure et style
      { name: "Angular", level: 75 }, // Framework Google - Applications complexes
      { name: "React Native", level: 70 }, // Framework - Apps mobiles natives
    ],
  },
  {
    /**
     * CATÉGORIE 2 : Technologies serveur et gestion de données
     * Tout ce qui s'exécute côté serveur et gestion des données
     */
    category: "Développement Backend & Bases de données",
    technologies: [
      { name: "Node.js", level: 85 }, // JavaScript serveur - Runtime backend
      { name: "Express", level: 80 }, // Framework web - APIs et routes
      { name: "Python", level: 75 }, // Langage polyvalent - Scripts et IA
      { name: "MySQL", level: 85 }, // SGBD relationnel - Données structurées
      { name: "MongoDB", level: 80 }, // Base NoSQL - Données flexibles
      { name: "PostgreSQL", level: 70 }, // SGBD avancé - Fonctionnalités étendues
      { name: "SQL", level: 90 }, // Langage - Requêtes bases de données
      { name: "REST API", level: 90 }, // Architecture - Communication client-serveur
    ],
  },
  {
    /**
     * CATÉGORIE 3 : Solutions métier et systèmes de gestion de contenu
     * Technologies orientées entreprise et solutions clé en main
     */
    category: "Solutions d'Entreprise & CMS",
    technologies: [
      { name: "WinDev", level: 75 }, // RAD PC SOFT - Applications métiers
      { name: "WinDev Mobile", level: 70 }, // Extension mobile - Apps entreprise
      { name: "WordPress", level: 80 }, // CMS - Sites et boutiques en ligne
      { name: "PHP", level: 70 }, // Langage serveur - Backend web
    ],
  },
  {
    /**
     * CATÉGORIE 4 : Design et expérience utilisateur
     * Compétences créatives et conception d'interfaces
     */
    category: "Design & Création",
    technologies: [
      { name: "Figma", level: 85 }, // Outil collaboratif - Design d'interface
      { name: "Canva", level: 90 }, // Plateforme - Création graphique simplifiée
      { name: "UI/UX Design", level: 80 }, // Discipline - Expérience utilisateur optimale
      { name: "Prototypage", level: 75 }, // Process - Maquettes interactives
      { name: "Design System", level: 70 }, // Méthodologie - Systèmes cohérents
    ],
  },
  {
    /**
     * CATÉGORIE 5 : Outils de développement et technologies émergentes
     * Environnements, outils et technologies futures
     */
    category: "Outils & Intelligence Artificielle",
    technologies: [
      { name: "Git", level: 90 }, // Contrôle de version - Gestion code source
      { name: "GitHub", level: 85 }, // Plateforme - Collaboration et hosting
      { name: "IA & Prompt Engineering", level: 80 }, // Technologie - Intelligence artificielle
      { name: "Docker", level: 65 }, // Conteneurisation - Environnements isolés
      { name: "Cloudinary", level: 75 }, // Service cloud - Gestion médias
      { name: "JWT", level: 80 }, // Sécurité - Authentification tokens
      { name: "Socket.io", level: 70 }, // Temps réel - Communication bidirectionnelle
      { name: "VS Code", level: 95 }, // Éditeur - Environnement développement
      { name: "Windev IDE", level: 85 }, // EDI - Développement applications PC SOFT
    ],
  },
];

/**
 * ===================================================================
 * 4. PORTFOLIO DE PROJETS
 * ===================================================================
 * Galerie de réalisations - Maximum 6 projets recommandé
 * Structure cohérente pour chaque projet
 * ===================================================================
 */

export const projects = [
  {
    // Identifiant unique pour React keys
    id: 1,

    // Titre court et percutant (max 5 mots)
    title: "Mamou Delivery",

    // Description courte - Visible sur la carte projet
    description:
      "Application de livraison locale - Solution complète de e-commerce et logistique pour la ville de Mamou.",

    // Description détaillée - Visible dans les modals ou pages dédiées
    longDescription:
      "Plateforme de livraison développée pour connecter les commerçants locaux de Mamou avec leurs clients. Fonctionnalités : catalogue produits, panier dynamique, système de commande, suivi des livraisons, interface administrateur, et gestion des livreurs. Développée avec une stack moderne et performante.",

    // Technologies utilisées (max 6 recommandé)
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "JWT",
      "Cloudinary",
    ],

    // Lien vers le repository GitHub
    githubUrl: "https://github.com/Ouendeno30/MamouDelivery.git",

    // Lien vers la démo en ligne (remplacer "#" quand disponible)
    liveDemo: "#",

    // Image du projet dans public/assets/
    image: "/assets/project-delivery.jpg",

    // Projet mis en avant (max 2 recommandé)
    featured: true,

    // Catégorie pour filtrage
    category: "academique",

    // Année de réalisation
    year: "2024",

    // Statut actuel du projet
    status: "🚀 Repository Actif",
  },
  {
    id: 2,
    title: "Gestion Préfectorale de l'Éducation",
    description:
      "Plateforme de gestion administrative pour la direction préfectorale de l'éducation - Digitalisation des processus éducatifs.",
    longDescription:
      "Application web développée pour moderniser la gestion administrative de la direction préfectorale de l'éducation. Système complet incluant gestion des établissements, suivi des effectifs, planning académique, et génération de rapports.",
    technologies: ["Angular", "PostgreSQL", "Python", "TypeScript"],
    githubUrl: "https://github.com/Ouendeno30/gestion-education",
    liveDemo: "#",
    image: "/assets/project-education.jpg",
    featured: true,
    category: "academique",
    year: "2024",
    status: "🎯 En Développement",
  },
  {
    id: 3,
    title: "Système de Gestion Administrative",
    description:
      "Application de gestion complète pour automatiser les processus administratifs des organisations.",
    longDescription:
      "Outil de gestion développé pour optimiser les processus administratifs. Modules inclus : gestion documentaire, planning des ressources, suivi des tâches, et tableau de bord analytique.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/Ouendeno30/gestion-admin",
    liveDemo: "#",
    image: "/assets/project-gestion.jpg",
    featured: false,
    category: "academique",
    year: "2024",
    status: "💻 Code Disponible",
  },
  {
    id: 4,
    title: "Application Commerciale WinDev",
    description:
      "Solution métier complète pour la gestion commerciale des PME - Facturation, stock et comptabilité.",
    longDescription:
      "Application desktop développée avec WinDev pour optimiser la gestion commerciale des petites et moyennes entreprises. Interface adaptée aux besoins locaux avec support multilingue.",
    technologies: ["WinDev", "WinDev Mobile", "MySQL", "SQL"],
    githubUrl: "https://github.com/Ouendeno30/app-windev-commerciale",
    liveDemo: "#",
    image: "/assets/project-windev.jpg",
    featured: false,
    category: "professionnel",
    year: "2024",
    status: "✅ Terminé",
  },
  {
    id: 5,
    title: "Application Mobile Flutter",
    description:
      "Application mobile cross-platform - Solution performante pour iOS et Android.",
    longDescription:
      "Application mobile développée avec Flutter offrant une expérience utilisateur native sur les deux plateformes. Architecture moderne avec state management et design responsive.",
    technologies: ["Flutter", "Dart", "REST API", "SQLite"],
    githubUrl: "https://github.com/Ouendeno30/app-flutter-mobile",
    liveDemo: "#",
    image: "/assets/project-flutter.jpg",
    featured: false,
    category: "academique",
    year: "2024",
    status: "📱 Mobile Ready",
  },
  {
    id: 6,
    title: "Portfolio React Modern",
    description:
      "Site portfolio personnel - Démonstration de mes compétences en développement frontend moderne.",
    longDescription:
      "Portfolio développé avec React pour présenter mes projets et compétences. Design moderne, responsive, et performances optimisées. Code source disponible comme exemple de mes capacités en développement frontend.",
    technologies: ["React", "JavaScript", "CSS3", "Vite", "Git"],
    githubUrl: "https://github.com/Ouendeno30/ouendeno-portfolio",
    liveDemo: "https://ouendeno-bernard.netlify.app",
    image: "/assets/project-portfolio.jpg",
    featured: false,
    category: "personnel",
    year: "2024",
    status: "🌐 En Ligne",
  },
];

/**
 * ===================================================================
 * 5. SECTION HERO (PAGE D'ACCUEIL)
 * ===================================================================
 * Contenu de la bannière principale - Première impression des visiteurs
 * ===================================================================
 */

export const heroContent = {
  /**
   * Titre principal - Accroche immédiate (max 8 mots)
   * Doit résumer ton positionnement unique
   */
  title: "Développeur Full-Stack & Designer UI/UX",

  /**
   * Sous-titre - Complète le titre (max 10 mots)
   * Doit préciser ton domaine d'expertise géographique
   */
  subtitle: "Créateur de solutions digitales innovantes pour la Guinée",

  /**
   * Description - Présentation détaillée (2-3 phrases)
   * Doit expliquer ce que tu fais et pour qui
   */
  description:
    "Spécialisé dans le développement d'applications web, mobiles et solutions métiers. Découvrez mes projets réels et mon expertise technique à travers mes réalisations concrètes.",

  /**
   * Appels à l'action - Textes des boutons principaux
   * Bouton principal : action la plus importante
   * Bouton secondaire : action alternative
   */
  cta: {
    primary: "Voir mes projets GitHub",
    secondary: "Télécharger mon CV",
  },
};

/**
 * ===================================================================
 * GUIDE DE MAINTENANCE ET BONNES PRATIQUES
 * ===================================================================
 *
 * ✅ POUR METTRE À JOUR CE FICHIER :
 *
 * 1. INFORMATIONS PERSONNELLES :
 *    - Vérifier régulièrement les coordonnées
 *    - Mettre à jour le CV trimestriellement
 *    - Actualiser les liens sociaux si changement
 *
 * 2. COMPÉTENCES :
 *    - Réévaluer les niveaux tous les 6 mois
 *    - Ajouter les nouvelles technologies apprises
 *    - Supprimer les technologies obsolètes
 *
 * 3. PROJETS :
 *    - Maximum 6 projets dans le portfolio
 *    - Mettre à jour les statuts des projets
 *    - Remplacer "#" par les vrais liens de démo
 *    - Ajouter des images de qualité (400x250px)
 *
 * 4. CONTENU TEXTUEL :
 *    - Relire pour fautes d'orthographe
 *    - Adapter le ton selon l'audience cible
 *    - Garder les descriptions concises et impactantes
 *
 * 🚀 PROCHAINES ÉTAPES RECOMMANDÉES :
 *
 * 1. Court terme (1 semaine) :
 *    - Créer les repositories GitHub manquants
 *    - Préparer les images des projets
 *    - Déployer le portfolio en ligne
 *
 * 2. Moyen terme (1 mois) :
 *    - Créer des démos en ligne pour les projets
 *    - Rédiger des README.md détaillés sur GitHub
 *    - Optimiser les images pour le web
 *
 * 3. Long terme (3 mois) :
 *    - Ajouter 1-2 nouveaux projets significatifs
 *    - Recueillir des témoignages clients/partenaires
 *    - Mettre à jour avec les dernières technologies
 *
 * 📞 SUPPORT :
 * Pour toute question sur la structure ou la maintenance,
 * consulter la documentation React ou contacter le développeur.
 * ===================================================================
 */
