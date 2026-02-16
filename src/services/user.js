import { apiRequest } from "./apiClient";

export async function getUsers() {
  const data = await apiRequest("/user", { method: "GET" });
  return data?.users || [];
}

export async function registerUser({ login, name, password }) {
  const data = await apiRequest("/user", {
    method: "POST",
    body: { login, name, password },
  });
  return data?.user;
}

export async function loginUser({ login, password }) {
  const data = await apiRequest("/user/login", {
    method: "POST",
    body: { login, password },
  });
  return data?.user;
}
