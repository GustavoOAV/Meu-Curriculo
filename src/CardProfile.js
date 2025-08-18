import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import "./CardProfile.css";

export default function CardPerfil() {
  return (
    <div className="card-container">
      <img
        src="/images/eu.jpeg"
        alt="Perfil"
        className="profile-pic"
      />

      <div className="contact-info">
        <p>
          <FaEnvelope className="icon" />
          gustavo.oavergani@gmail.com
        </p>
        <p>
          <FaPhone className="icon" />
          (11) 945998008
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

      <h2 className="titleC">Competências</h2>
      <ul className="skills-list">
        <li>BLABLA</li>
        <li>BLABLA</li>
        <li>BLABLA</li>
        <li>BLABLA</li>
      </ul>
    </div>
  );
}
