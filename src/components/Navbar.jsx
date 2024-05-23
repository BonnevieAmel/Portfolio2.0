import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-nav">
        <Link href="/">Amel Bonnevie</Link>
      </div>

      <ul className="Nav">
        <li className="green">
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/ProjectsPage">Mes Projets</Link>
        </li>
        <li>
          <Link to="/ContactPage"> Me Contacter </Link>
        </li>
        <li>
          <Link to="/Blog"> Blog </Link>
        </li>
      </ul>
    </nav>
  );
}
