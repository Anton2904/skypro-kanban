import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import BoardPage from "../pages/Board/BoardPage";
import CardPage from "../pages/Card/CardPage";
import NewCardPage from "../pages/NewCard/NewCardPage";
import ExitPage from "../pages/Exit/ExitPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

function AppRoutes({ isAuth, setIsAuth }) {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage isAuth={isAuth} setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<RegisterPage isAuth={isAuth} setIsAuth={setIsAuth} />} />

      <Route
        path="/"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <BoardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/new-card"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <NewCardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/card/:id"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <CardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/exit"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <ExitPage setIsAuth={setIsAuth} />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
