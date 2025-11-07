import React from "react";
import { Globe, PenTool, Monitor, Gamepad2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Monitor className="icon" />,
      title: "Design gráfico",
      desc: "Trabalhe em 3D com o Blender, desenhe ou edite imagens no Gimp e use o Inkscape para gráficos vetoriais.",
    },
    {
      icon: <PenTool className="icon" />,
      title: "Produtividade",
      desc: "Com o pacote completo do LibreOffice, crie documentos, planilhas e apresentações. Importe e exporte em PDF ou Microsoft Office.",
    },
    {
      icon: <Globe className="icon" />,
      title: "Web",
      desc: "Navegue na web, assista vídeos no YouTube e Netflix com o Firefox. Transforme sites em aplicativos de desktop.",
      highlight: true,
    },
    {
      icon: <Gamepad2 className="icon" />,
      title: "Jogos",
      desc: "Acesse milhares de jogos com o Steam, Heroic Games Launcher e Lutris. Linux também é diversão!",
    },
  ];

  return (
    <section className="features">
      <div className="content-wrapper">
        <h2>Características</h2>
        <h3>O que é  Linux</h3>
        <p className="intro">
          O Linux é um sistema operacional de código aberto baseado no kernel criado por Linus Torvalds em 1991. Ele é uma alternativa gratuita e segura a outros sistemas, como o Windows e o macOS. Por ser livre e personalizável, o Linux pode ser modificado e adaptado para diferentes usos — desde computadores pessoais até servidores, celulares e supercomputadores. Além disso, sua estabilidade e desempenho o tornam muito popular entre desenvolvedores e empresas de tecnologia. </p>

        {/* Grade de cards */}
        <div className="feature-grid">
          {features.map((f, i) => (
            <div
              key={i}
              className={`feature-card ${f.highlight ? "highlight" : ""}`}
            >
              {f.icon}
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
