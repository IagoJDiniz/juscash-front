import { Navigate, Outlet } from "react-router";
import { isAuthenticated } from "@utils/auth";

export const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};
