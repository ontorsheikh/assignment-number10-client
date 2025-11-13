import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivetRouter = ({ children }) => {
  const { user, userLoading } = useContext(AuthContext);
  const location = useLocation();

  if (userLoading) return;
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivetRouter;
