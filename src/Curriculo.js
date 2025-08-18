import CardPerfil from "./CardProfile";
import Corpo from "./Corpo";
import "./Curriculo.css";

export default function Curriculo() {
  return (
    <div className="curriculo-container">
      <CardPerfil />

      <div className="corpo-container">
        <Corpo titulo="Objetivo">
          Meu objetivo é ingressar na área de desenvolvimento web como desenvolvedor 
          front-end, adquirindo experiência prática e evoluindo para me tornar 
          full-stack no futuro.
        </Corpo>

        <Corpo titulo="Formação">
          Análise e Desenvolvimento de Sistemas - Senac <br />
          Técnico em Tecnologia da Informação - Senac Tatuapé
        </Corpo>

        <Corpo titulo="Experiência">
          - Corretor de Imóveis <br />
          - Prevenção a Fraudes <br />
          - Produção Audiovisual (clipes e redes sociais)
        </Corpo>

        <Corpo titulo="Competências">
          HTML, CSS, JavaScript, React, Spring Boot, SQL
        </Corpo>
      </div>
    </div>
  );
}
