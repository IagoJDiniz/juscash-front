import { createNotification } from "@components/NotificationFlag.component";
import { logout } from "@utils/auth";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3333",
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue: any[] = [];

function processQueue(error: any, token: string | null = null) {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/refresh")
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then(() => api(originalRequest))
          .catch(Promise.reject);
      }

      isRefreshing = true;

      try {
        await api.get("/refresh");

        processQueue(null);
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        logout();
        createNotification({
          type: "error",
          message: "Sessão expirada. Faça login novamente.",
        });
        window.location.href = "/login";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
