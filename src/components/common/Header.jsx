import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="container container-header">
      <nav>
        <h2>Menú</h2>
        <Link to="/">Home</Link> |<Link to="/tareas">Tareas</Link>
      </nav>
    </header>
  );
}
