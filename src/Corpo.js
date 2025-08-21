import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./Corpo.css";

export default function Corpo({ titulo, children }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="caixa">
      <h2
        className="titulo"
        style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}
        onClick={() => setAberto((prev) => !prev)}
      >
        <FaPlus style={{ fontSize: "1em", color: "#0077cc" }} />
        {titulo}
      </h2>
      <div className={`conteudo${aberto ? " aberto" : ""}`}>
        <div className="conteudo-texto">{children}</div>
      </div>
    </div>
  );
}