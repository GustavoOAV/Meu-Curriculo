import {
  FaCss3Alt,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaPhone,
  FaReact,
} from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
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
        <p>
            <FaFilePdf className="icon" />
         <a
            href="/curriculum Gustavo.O.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
          Curriculo
          </a>
        </p>
      </div>

      <h2 className="titleC">Idiomas</h2>
      <ul className="skills-list">
        <li>
          <strong>Inglês:</strong> Intermediário
        </li>
        <li>
          <strong>Espanhol:</strong> Básico
        </li>
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
      <h2 className="titleC">Competências</h2>
      <ul className="skills-list">
        <li>
          <FaHtml5 className="icon" />
          HTML
        </li>
        <li>
          <FaCss3Alt className="icon" />
          CSS
        </li>
        <li>
          <FaJs className="icon" />
          JavaScript
        </li>
        <li>
          <FaReact className="icon" />
          React
        </li>
        <li>
          <SiMysql className="icon" />
          MySQL
        </li>
        <li>
          <FaGithub className="icon" />
          GitHub
        </li>
      </ul>
    </div>
  );
}
