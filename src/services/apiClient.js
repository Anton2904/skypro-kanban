import { getToken, clearAuthStorage } from "./token";

const API_BASE = "https://wedev-api.sky.pro/api";

async function readErrorBody(res) {
  const contentType = res.headers.get("content-type") || "";
  try {
    if (contentType.includes("application/json")) {
      const data = await res.json();
      const message =
        data?.message || data?.error || data?.details || JSON.stringify(data);
      return String(message);
    }
    const text = await res.text();
    return text || res.statusText;
  } catch {
    return res.statusText || "Unknown error";
  }
}

export async function apiRequest(path, { method = "GET", body, headers } = {}) {
  const token = getToken();
  const url = path.startsWith("http") ? path : `${API_BASE}${path}`;

  const finalHeaders = {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(headers || {}),
  };

  let res;
  try {
    res = await fetch(url, {
      method,
      headers: finalHeaders,
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error("Сервер недоступен. Проверьте интернет и повторите попытку.");
  }

  if (!res.ok) {
    const message = await readErrorBody(res);
    if (res.status === 401) {
      clearAuthStorage();
    }
    const err = new Error(message || `HTTP ${res.status}`);
    err.status = res.status;
    throw err;
  }

  if (res.status === 204) return null;

  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return res.json();
  }
  return res.text();
}