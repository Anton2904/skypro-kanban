import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import BoardPage from "../pages/Board/BoardPage";
import CardPage from "../pages/Card/CardPage";
import NewCardPage from "../pages/NewCard/NewCardPage";
import ExitPage from "../pages/Exit/ExitPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <BoardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/new-card"
        element={
          <ProtectedRoute>
            <NewCardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/card/:id"
        element={
          <ProtectedRoute>
            <CardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/exit"
        element={
          <ProtectedRoute>
            <ExitPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
