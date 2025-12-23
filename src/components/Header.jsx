import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/akcije">Akcija</Link>
          </li>
          <li>
            <Link to="/o-nama">Naša priča</Link>
          </li>
          <li>
            <Link to="/">
              <img src="https://i.ibb.co/cXh6GXGK/car-logo.png" alt="Logo" />
            </Link>
          </li>
          <li>
            <Link to="/informacije">Informacije</Link>
          </li>
          <li>
            <Link to="/ponuda">Ponuda</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
