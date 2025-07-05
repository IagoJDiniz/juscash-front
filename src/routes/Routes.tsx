import { Routes, Route } from "react-router";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Posts from "@pages/Posts";
import { PrivateRoute } from "@routes/PrivateRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Rotas privadas */}
      <Route element={<PrivateRoute />}>
        <Route path="/posts" element={<Posts />} />
      </Route>

      {/* Rota default */}
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
