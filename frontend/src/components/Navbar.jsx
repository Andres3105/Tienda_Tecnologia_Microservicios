import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark glass-nav">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          <i className="fa-solid fa-microchip"></i> Tech Store
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;