import { useState } from "react";
import "./Corpo.css";

export default function Corpo({ titulo, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="caixa">
      <h2 onClick={() => setIsOpen(!isOpen)} className="titulo">
        {titulo}
        <span className="icone">{isOpen ? "▲" : "▼"}</span>
      </h2>

      <div className={`conteudo ${isOpen ? "aberto" : ""}`}>
        <div className="conteudo-texto">{children}</div>
      </div>
    </div>
  );
}