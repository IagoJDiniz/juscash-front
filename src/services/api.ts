import { logout } from "@utils/auth";
import axios from "axios";
import { useNavigate } from "react-router";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3333",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const navigate = useNavigate();
      logout(); // Remove token
      navigate("/login"); // Redireciona para login
    }
    return Promise.reject(error);
  }
);

export default api;
