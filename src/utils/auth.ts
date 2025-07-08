export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token");

  if (!token) return false;

  try {
    const payloadBase64 = token.split(".")[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));

    const nowInSeconds = Math.floor(Date.now() / 1000);

    if (decodedPayload.exp && decodedPayload.exp < nowInSeconds) {
      localStorage.removeItem("token");
      return false;
    }

    return true;
  } catch (error) {
    localStorage.removeItem("token");
    return false;
  }
};

export const login = (token: string) => {
  localStorage.setItem("token", token);
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};
