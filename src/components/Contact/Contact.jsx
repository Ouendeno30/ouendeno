import React, { useState } from "react";
import styles from "./Contact.module.css";
import { personalInfo } from "../../data/data";

const Contact = () => {
  // States pour gérer les champs du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // States pour gérer l'état du formulaire
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Fonction pour gérer les changements dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Effacer l'erreur du champ quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  // Fonction de validation du formulaire
  const validateForm = () => {
    const newErrors = {};

    // Validation du nom
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères";
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez entrer un email valide";
    }

    // Validation du sujet
    if (!formData.subject.trim()) {
      newErrors.subject = "Le sujet est requis";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Le sujet doit contenir au moins 5 caractères";
    }

    // Validation du message
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    return newErrors;
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Valider le formulaire
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simuler l'envoi du formulaire
    setIsSubmitting(true);

    try {
      // Ici, tu peux intégrer un service comme EmailJS, Formspree ou ton backend
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulation d'envoi

      // Réinitialiser le formulaire après succès
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(true);

      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      setErrors({ submit: "Une erreur est survenue. Veuillez réessayer." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        {/* Titre de la section contact */}
        <h2 className="title-section">Contactez-moi</h2>

        <p className={styles.contactIntro}>
          Vous avez un projet en tête ? Discutons-en ! Je suis toujours ouvert à
          de nouvelles opportunités et collaborations passionnantes.
        </p>

        <div className={styles.contactContent}>
          {/* Informations de contact */}
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Parlons de votre projet</h3>
            <p className={styles.infoDescription}>
              Que vous ayez une idée précise ou juste une ébauche de projet, je
              serais ravi d'échanger avec vous pour trouver la meilleure
              solution.
            </p>

            {/* Liste des informations de contact */}
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📧</div>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${personalInfo.email}`}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📱</div>
                <div>
                  <h4>Téléphone</h4>
                  <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div>
                  <h4>Localisation</h4>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Liens vers les réseaux sociaux */}
            <div className={styles.socialLinks}>
              <h4>Suivez-moi</h4>
              <div className={styles.socialIcons}>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="GitHub"
                >
                  <span>🐱</span>
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  <span>💼</span>
                </a>
                <a
                  href={personalInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Twitter"
                >
                  <span>🐦</span>
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className={styles.contactForm}>
            {/* Message de succès */}
            {isSubmitted && (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✅</div>
                <div>
                  <h4>Message envoyé avec succès !</h4>
                  <p>Je vous répondrai dans les plus brefs délais.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Champ Nom */}
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${styles.formInput} ${
                    errors.name ? styles.error : ""
                  }`}
                  placeholder="Votre nom complet"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <span className={styles.errorMessage}>{errors.name}</span>
                )}
              </div>

              {/* Champ Email */}
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Adresse email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.formInput} ${
                    errors.email ? styles.error : ""
                  }`}
                  placeholder="votre@email.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <span className={styles.errorMessage}>{errors.email}</span>
                )}
              </div>

              {/* Champ Sujet */}
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  Sujet du message *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`${styles.formInput} ${
                    errors.subject ? styles.error : ""
                  }`}
                  placeholder="Objet de votre message"
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <span className={styles.errorMessage}>{errors.subject}</span>
                )}
              </div>

              {/* Champ Message */}
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`${styles.formTextarea} ${
                    errors.message ? styles.error : ""
                  }`}
                  placeholder="Décrivez votre projet ou votre demande..."
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && (
                  <span className={styles.errorMessage}>{errors.message}</span>
                )}
              </div>

              {/* Erreur générale de soumission */}
              {errors.submit && (
                <div className={styles.submitError}>{errors.submit}</div>
              )}

              {/* Bouton de soumission */}
              <button
                type="submit"
                className={`btn primary ${styles.submitButton}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.spinner}></div>
                    Envoi en cours...
                  </>
                ) : (
                  "📨 Envoyer le message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
