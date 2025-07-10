import api from "@services/api";

export const isAuthenticated = async (): Promise<boolean> => {
  try {
    await api.get("/me");
    return true;
  } catch {
    return false;
  }
};

export const logout = async () => {
  try {
    await api.post("/logout");
  } catch {
    // Se falhar, não impede o logout forçado
  } finally {
    window.location.href = "/login";
  }
};
