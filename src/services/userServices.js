import jwtDecode from "jwt-decode";

export const getCurrentUser = () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  return jwtDecode(token);
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};
