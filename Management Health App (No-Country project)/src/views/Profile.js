import { Link } from "react-router-dom";
import { LOGOUT } from "../config/routes/paths";

const Private = () => {
  return (
    <div>
      <Link to={LOGOUT}>Cerrar Sesión</Link>
    </div>
  );
};

export default Private;
