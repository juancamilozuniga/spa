import { NavLink } from "react-router-dom";

function Navbar() {
  return (


    <div>
      <h1>Navbar</h1>
      <nav>
        <ul>
          <li>

            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>

            <NavLink to="/servicios">Servicios</NavLink>
          </li>
          <li>
            <NavLink to="/portafolio">Portafolio</NavLink>
          </li>
          <li>

            <NavLink to="/soporte">Soporte</NavLink>
          </li>
          <li>

            <NavLink to="/proyectos/101">Proyecto 111</NavLink>
          </li>

        </ul>

      </nav>
      
    </div>
  );
}

export default Navbar;