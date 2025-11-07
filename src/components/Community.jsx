import React from "react";

export default function Community() {
  return (
    <section className="community" id="comunidade">
      <div className="community-container">
        <h2>Junte-se à Comunidade Linux</h2>
        <p>
          O Linux é feito por pessoas como você. Todos os dias, milhares de usuários
          no mundo inteiro compartilham conhecimento, ajudam e criam novas ideias.
        </p>
        <p>
          Participe de fóruns, grupos e eventos. Aprenda, ensine e contribua com o
          software livre.
        </p>

        <div className="community-links">
          <a href="https://forums.linuxmint.com/" target="_blank" rel="noopener noreferrer">
            Fórum Linux Mint
          </a>
          <a href="https://www.reddit.com/r/linux/" target="_blank" rel="noopener noreferrer">
            Reddit Linux
          </a>
          <a href="https://t.me/linuxmintbr" target="_blank" rel="noopener noreferrer">
            Grupo Telegram BR
          </a>
        </div>
      </div>
    </section>
  );
}
