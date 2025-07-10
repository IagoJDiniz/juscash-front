import { Navigate, Outlet } from "react-router";
import { useEffect, useState } from "react";
import { isAuthenticated } from "@utils/auth";
import { LoadingSpinner } from "@components/LoadingSpinner.component";

export const PrivateRoute = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const result = await isAuthenticated();
      setIsAuth(result);
    };

    checkAuth();
  }, []);

  if (isAuth === null) {
    return <LoadingSpinner loading />;
  }

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
