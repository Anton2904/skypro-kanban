import { apiRequest } from "./apiClient";

export async function getTasks() {
  const data = await apiRequest("/kanban", { method: "GET" });
  return data?.tasks || [];
}

export async function getTaskById(id) {
  const data = await apiRequest(`/kanban/${id}`, { method: "GET" });
  return data?.task;
}

export async function createTask(task) {
  const data = await apiRequest("/kanban", { method: "POST", body: task });
  return data?.tasks || [];
}

export async function updateTask(id, task) {
  const data = await apiRequest(`/kanban/${id}`, { method: "PUT", body: task });
  return data?.tasks || [];
}

export async function deleteTask(id) {
  const data = await apiRequest(`/kanban/${id}`, { method: "DELETE" });
  return data?.tasks || [];
}
