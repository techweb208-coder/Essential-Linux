import React from "react";

export default function Start() {
  return (
    <section className="start" id="comecar">
      <div className="start-container">
        <h2>Como começar com Linux</h2>
        <p>
          Não precisa desinstalar o que você tem! Você pode testar o Linux direto
          de um pendrive, sem alterar o sistema atual.
        </p>
        <p>
          Em poucos minutos, você estará navegando, estudando e ouvindo música —
          tudo com liberdade e sem vírus.
        </p>

        <div className="start-buttons">
          <a
            href="https://linuxmint.com/download.php"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Baixar Linux Mint
          </a>
          <a
            href="https://linuxmint-installation-guide.readthedocs.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ver guia de instalação
          </a>
        </div>
      </div>
    </section>
  );
}
