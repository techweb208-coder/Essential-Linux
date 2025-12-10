  import React from "react";
  import { Link } from "react-router-dom";
  import "./Header.css"; // garante que o arquivo exista (crie se não existir)

  export default function Header() {
    return (
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            {/* Se tiver logo, troque o texto abaixo por <img src={logo} alt="logo" /> */}
            <Link to="/" className="brand-link">Essential Linux</Link>
          </div>

          <nav className="nav">
            <ul>
              <li><Link to="/" className="nav-link">Início</Link></li>
              <li><Link to="/distros" className="nav-link">Distribuições</Link></li>
              <li><Link to="/contato" className="nav-link">Contato</Link></li>
            </ul>
          </nav>

          {/* botão de menu para mobile */}
          <button
            className="nav-toggle"
            aria-label="Abrir menu"
            onClick={() => {
              const el = document.querySelector(".nav");
              if (el) el.classList.toggle("open");
            }}
          >
            <span className="burger" />
          </button>
        </div>
      </header>
    );
  }
