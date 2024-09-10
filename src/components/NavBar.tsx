import "./css/menu.css";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light navbarBlack">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://miro.medium.com/v2/resize:fit:600/format:webp/0*NsHVyfpJ2k7ixTAd"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          PokeAlbe
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="PokePage" className="nav-link active">
                PokePage
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
