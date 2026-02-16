//Файл AuthContext
import { createContext, useContext, useMemo, useState } from "react";
import { loginUser, registerUser } from "../services/user";
import {
  clearAuthStorage,
  getStoredUser,
  getToken,
  setStoredUser,
  setToken,
} from "../services/token";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setTokenState] = useState(() => getToken());
  const [user, setUser] = useState(() => getStoredUser());
  const [isAuth, setIsAuth] = useState(() => Boolean(getToken()));

  const applyAuth = (nextUser) => {
    setToken(nextUser.token);
    setStoredUser({ id: nextUser.id, login: nextUser.login, name: nextUser.name });
    setTokenState(nextUser.token);
    setUser({ id: nextUser.id, login: nextUser.login, name: nextUser.name });
    setIsAuth(true);
  };

  const logout = () => {
    clearAuthStorage();
    setTokenState("");
    setUser(null);
    setIsAuth(false);
  };

  const login = async ({ login, password }) => {
    const nextUser = await loginUser({ login, password });
    applyAuth(nextUser);
    return nextUser;
  };

  const register = async ({ login, name, password }) => {
    const nextUser = await registerUser({ login, name, password });
    applyAuth(nextUser);
    return nextUser;
  };

  const value = useMemo(
    () => ({ isAuth, token, user, login, register, logout }),
    [isAuth, token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
