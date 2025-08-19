import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import "./CardProfile.css";

export default function CardPerfil() {
  return (
    <div className="card-container">
      <img src="/images/eu.jpeg" alt="Perfil" className="profile-pic" />

      <div className="contact-info">
        <p>
          <FaEnvelope className="icon" />
          <a href="mailto:gustavo.oavergani@gmail.com">
            gustavo.oavergani@gmail.com
          </a>
        </p>
        <p>
          <FaPhone className="icon" />
          <a
            href="https://wa.me/5511945998008"
            target="_blank"
            rel="noopener noreferrer"
          >
            (11) 94599-8008
          </a>
        </p>
        <p>
          <FaLinkedin className="icon" />
          <a
            href="https://www.linkedin.com/in/gustavo-araujo-323369197/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </p>
        <p>
          <FaGithub className="icon" />
          <a
            href="https://github.com/GustavoOAV"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>

      <h2 className="titleC">Idiomas</h2>
      <ul className="skills-list">
        <li><strong>Inglês:</strong> Intermediário</li>
        <li><strong>Espanhol:</strong> Básico</li>
      </ul>

      <h2 className="titleC">Meus Sites</h2>
      <ul className="sites-list">
        <li>
          <FaGlobe className="icon" />
          <a
            href="https://voarmepoedepe.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voar Me Poem de Pé
          </a>
        </li>
      </ul>
    </div>
  );
}
