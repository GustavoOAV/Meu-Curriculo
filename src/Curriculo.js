import { useState } from "react";
import CardPerfil from "./CardProfile";
import Corpo from "./Corpo";
import "./Curriculo.css";

export default function Curriculo() {
  const [modalOpen, setModalOpen] = useState(false);

  const [certModal, setCertModal] = useState(null);

  const certificados = [
    {
      nome: "Programador de Sistemas a",
      arquivo: "/certificados/Programador de Sistemas a.pdf",
      instituicao: "Senac",
    },
    {
      nome: "Hacker: Quem são, Onde Vivem, o Que Comem, Como se Reproduzem",
      arquivo: "/certificados/Certificado Senac - Hackers.pdf",
      instituicao: "Senac",
    },  
    {
      nome: "Configuração de Ambiente React",
      arquivo: "/certificados/Cert Ambiente React.pdf",
      instituicao: "DIO XP",
    },
      {
      nome: "Cert Calculadora",
      arquivo: "/certificados/Cert Calculadora.pdf",
      instituicao: "DIO XP",
    },
      {
      nome: "Estlizando Paginas com CSS",
      arquivo: "/certificados/Cert CSS.pdf",
      instituicao: "DIO XP",
    },
      {
      nome: "Entendendo a DOM",
      arquivo: "/certificados/Cert Dom.pdf",
      instituicao: "DIO XP",
    },
      {
      nome: "Páginas Web com HTML",
      arquivo: "/certificados/Cert HTML.pdf",
      instituicao: "DIO XP",
    },
      {
      nome: "Introdução a Front End com React",
      arquivo: "/certificados/Cert Introducao.pdf",
      instituicao: "DIO XP",
    },
      {
      nome: "Tornando Paginas Web Interativas com JavaScript",
      arquivo: "/certificados/Cert JavaScript.pdf",
      instituicao: "DIO XP",
    },
      {
      nome: "Primeiros Passos na Biblieteca React",
      arquivo: "/certificados/Cert Primeiro Passo.pdf",
      instituicao: "DIO XP",
    },
      {
      nome: "Java Foundations",
      arquivo: "/certificados/clmsCertificate.pdf",
      instituicao: "ORACLE Academy",
    },
      {
      nome: "Introdução ao Desenvolvimento Full Stack com a XP Inc.",
      arquivo: "/certificados/Cert Introdu FullStack.pdf",
      instituicao: "XP Inc.",
    },
    
  ];

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

        <Corpo titulo="Certificações">
          <ul>
            {certificados.map((cert, index) => (
              <li key={index}>
                <strong>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      color: "#0077cc",
                      textDecoration: "underline",
                      cursor: "pointer",
                      padding: 0,
                      font: "inherit",
                      paddind: 0,
                    }}
                    onClick={() => {
                      setModalOpen(true);
                      setCertModal(cert);
                    }}
                  >
                    {cert.nome}
                  </button>
                </strong>{" "}
                - {cert.instituicao}
              </li>
            ))}
          </ul>
        </Corpo>
        {modalOpen && certModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
            }}
            onClick={() => {
              setModalOpen(false);
              setCertModal(null);
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: 20,
                borderRadius: 10,
                maxWidth: "90vw",
                maxHeight: "90vh",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  background: "#0077cc",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  fontSize: 18,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setModalOpen(false);
                  setCertModal(null);
                }}
                title="Fechar"
              >
                ×
              </button>
              <iframe
                src={certModal.arquivo}
                title={`Certificado ${certModal.nome}`}
                style={{
                  width: "70vw",
                  height: "80vh",
                  border: "none",
                  borderRadius: 8,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
