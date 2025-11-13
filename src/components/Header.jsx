import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Essential Linux</h1>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
