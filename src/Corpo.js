import { useState } from "react";
import "./Corpo.css";

export default function Corpo({ titulo, children }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="caixa">
      <h2
        className="titulo"
        style={{ cursor: "pointer" }}
        onClick={() => setAberto((prev) => !prev)}
      >
        {titulo}
      </h2>
      <div className={`conteudo${aberto ? " aberto" : ""}`}>
        <div className="conteudo-texto">{children}</div>
      </div>
    </div>
  );
}