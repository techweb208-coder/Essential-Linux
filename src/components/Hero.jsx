import React from "react";
import linuxImages from "../assets/comp.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Texto à esquerda */}
        <div className="hero-text">
          <h1>Linux: o sistema que move o mundo</h1>
          <p>
            O Linux está em todos os lugares — nos celulares Android, nos servidores da internet,
            nos supercomputadores e até em dispositivos domésticos inteligentes.
            É um sistema livre, seguro e poderoso, feito para todos: de iniciantes a profissionais.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Saiba mais</button>
            <button className="btn-secondary">Distribuições populares</button>
          </div>
        </div>

        {/* Imagem à direita */}
        <div className="hero-image">
          <img src={linuxImages} alt="Dispositivos com Linux" />
        </div>
      </div>
      <div className="hero-curve"></div>
    </section>
  );
};

export default Hero;
