import { Navigate, Outlet, useLocation } from "react-router-dom";
import { LOGIN } from "../../config/routes/paths";
import { useAuthContext } from "../../context/authContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={LOGIN} state={{location}}/>;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
