import "./Distros.css";

// Importa imagens que já EXISTEM no seu projeto
import linuxImg from "../assets/linux.png";
import distrosImg from "../assets/distros.png";
import terminalImg from "../assets/terminal.png";
import opensourceImg from "../assets/opensource.png";

export default function Distros() {
  const distros = [
    {
      nome: "Ubuntu",
      descricao: "Uma das distribuições Linux mais populares e amigáveis.",
      img: linuxImg,
    },
    {
      nome: "Linux Mint",
      descricao: "Leve, rápida e ideal para iniciantes conhecendo o Linux.",
      img: distrosImg,
    },
    {
      nome: "Fedora",
      descricao: "Moderna, segura e muito usada por desenvolvedores.",
      img: terminalImg,
    },
    {
      nome: "Arch Linux",
      descricao: "Para usuários avançados, totalmente personalizável.",
      img: opensourceImg,
    },
  ];

  return (
    <div className="distros-page">
      <h1>Distribuições Linux</h1>

      <div className="distros-grid">
        {distros.map((distro, index) => (
          <div key={index} className="distro-card">
            <img src={distro.img} alt={distro.nome} />
            <h2>{distro.nome}</h2>
            <p>{distro.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
