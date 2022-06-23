import { NavLink } from "react-router-dom";
import img from "../assets/mh-logo.png";


const Navbar = () => {
  return (
    <>
      <div className="hero">
        <nav>
          <NavLink className="logo" to="/profile/home">
            <img src={img} alt="management-health-logo"></img>
          </NavLink>

          <div>
            <ul>
              <li>
                <NavLink to="/profile/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/profile/farmacia">Farmacia</NavLink>
              </li>
              <li>
                <NavLink to="/profile/profesionales">Profesionales</NavLink>
              </li>
              <li>
                <NavLink to="/profile/consultas">Consultas</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Perfil</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
