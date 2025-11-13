import React from "react";
import { Link } from "react-router-dom";

import "./Contato.css";

const Contato = () => {
  return (
    <section className="contato-page">
      <div className="contato-container">
        <div className="contato-info">
          <h2>Entre em Contato</h2>
          <p>
            Quer saber mais sobre o projeto <strong>Essential Linux</strong> ou contribuir com a comunidade?
            Fale conosco por um dos meios abaixo — estamos prontos para ajudar!
          </p>

          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:contato@essentiallinux.com">contato@essentiallinux.com</a>
            </li>
            <li>
              <strong>Telefone / WhatsApp:</strong>{" "}
              <a href="https://wa.me/5599999999999" target="_blank">+55 (99) 99999-9999</a>
            </li>
            <li>
              <strong>Endereço:</strong> Rua do Software Livre, 101 – São Paulo, SP
            </li>
            <li>
              <strong>Horário de Atendimento:</strong> Segunda a Sexta, das 9h às 18h
            </li>
          </ul>

    
        </div>

        <form className="contato-form">
          <h3>Envie uma Mensagem</h3>
          <label>Nome</label>
          <input type="text" placeholder="Seu nome" />

          <label>Email</label>
          <input type="email" placeholder="seuemail@exemplo.com" />

          <label>Mensagem</label>
          <textarea placeholder="Escreva sua mensagem..."></textarea>

          <button type="submit">Enviar</button>

        </form>
      </div>
      
    </section>
  );
};

export default Contato;
