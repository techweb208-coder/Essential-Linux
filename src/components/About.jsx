import React from "react";
import linuxLogo from "../assets/linux.png";
import terminalImg from "../assets/terminal.png";
import distroImg from "../assets/distros.png";
import openSourceImg from "../assets/opensource.png";

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-container">
        <div className="about-text">
          <h2>Sobre o Linux</h2>
          <h3>Liberdade, segurança e poder nas suas mãos</h3>
          <p>
            O Linux é um sistema operacional de código aberto criado por Linus
            Torvalds em 1991. Ele é conhecido pela estabilidade, desempenho e
            liberdade — usado por milhões de pessoas e empresas em todo o mundo.
          </p>
          <p>
            Ele é a base de sistemas como Android, Chrome OS e distribuições
            populares como Ubuntu, Fedora e Mint. O Linux está presente em
            celulares, servidores, supercomputadores e até na Estação Espacial
            Internacional.
          </p>
          <p>
            A filosofia do Linux é simples: <strong>liberdade para usar,
            estudar, modificar e compartilhar</strong> o software. Isso cria uma
            comunidade ativa e colaborativa que faz o sistema evoluir todos os
            dias.
          </p>
        </div>

        <div className="about-gallery">
          <img src={linuxLogo} alt="Logo do Linux" className="about-img" />
          <img src={terminalImg} alt="Terminal Linux" className="about-img" />
          <img src={distroImg} alt="Distribuições Linux" className="about-img" />
          <img src={openSourceImg} alt="Código aberto" className="about-img" />
        </div>
      </div>
    </section>
  );
}
