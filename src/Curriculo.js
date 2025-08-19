import CardPerfil from "./CardProfile";
import Corpo from "./Corpo";
import "./Curriculo.css";

export default function Curriculo() {
  return (
    <div className="curriculo-container">
      <CardPerfil />
      <div className="corpo-container">
        <Corpo titulo="Objetivo">
          Meu objetivo é ingressar no mundo do desenvolvimento e da informática,
          iniciando minha trajetória como desenvolvedor web front-end. Busco
          adquirir experiência prática e consolidar minhas habilidades técnicas,
          sempre com foco em entregar soluções criativas e eficientes. Tenho
          grande interesse em expandir meus conhecimentos continuamente, visando
          evoluir para a atuação como desenvolvedor full-stack no futuro. Desejo
          contribuir em projetos desafiadores, colaborar em equipe e crescer
          profissionalmente dentro da área de tecnologia.
        </Corpo>

        <Corpo titulo="Formação">
          <div className="formacao">
            <p>
              <strong>Graduação: Análise e Desenvolvimento de Sistemas</strong>
            </p>
            <p>Centro Universitário Senac São Paulo – SP</p>
            <p>Fevereiro/2023 a Dezembro/2025</p>
          </div>
        </Corpo>
        <Corpo titulo="Cursos">
          <div className="curso">
            <p>
              <strong>Curso de Técnico em Informática</strong>
            </p>
            <p>Serviço Nacional de Aprendizagem Comercial</p>
            <p>Senac, São Paulo - SP | Agosto/2017 a Maio/2019</p>
          </div>
        </Corpo>

        <Corpo titulo="Experiências Profissionais">
          <div className="experiencia">
            <p>
              <strong>Prevenção à Fraude</strong>
            </p>
            <p>Setembro/2022 a Setembro/2023</p>
            <p>Teleperformance</p>
            <p>São Paulo – SP</p>
          </div>

          <div className="experiencia">
            <p>
              <strong>Corretor de Imóveis</strong>
            </p>
            <p>Agosto/2021 a Dezembro/2021</p>
            <p>Metro Casa</p>
            <p>São Paulo – SP</p>
          </div>

          <div className="experiencia">
            <p>
              <strong>Produtor de Videoclipe</strong>
            </p>
            <p>Janeiro/2020 a Janeiro/2021</p>
            <p>NBRG - Produtora de Videoclipes</p>
            <p>São Paulo – SP</p>
          </div>

          <div className="experiencia">
            <p>
              <strong>Consultor de Vendas</strong>
            </p>
            <p>Dezembro/2024 a Janeiro/2025</p>
            <p>Veritas Prev</p>
            <p>São Paulo – SP</p>
          </div>
        </Corpo>

        <Corpo titulo="Competências">
          HTML, CSS, JavaScript, React, Spring Boot, SQL
        </Corpo>
      </div>
    </div>
  );
}
