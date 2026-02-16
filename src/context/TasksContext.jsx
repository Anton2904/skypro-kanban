//Файл TasksContext
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import * as kanbanApi from "../services/kanban";
import { useAuth } from "./AuthContext";

const TasksContext = createContext(null);

function normalizeTask(task) {
  return {
    id: task._id,
    title: task.title,
    topic: task.topic,
    status: task.status,
    description: task.description,
    date: task.date,
    userId: task.userId,
  };
}

export function TasksProvider({ children }) {
  const { isAuth } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    setLoading(true);
    setError("");
    try {
      const raw = await kanbanApi.getTasks();
      setTasks(raw.map(normalizeTask));
    } catch (e) {
      setError(e?.message || "Не удалось загрузить задачи");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // подгружаем задачи только если авторизованы
    if (!isAuth) {
      setTasks([]);
      setError("");
      setLoading(false);
      return;
    }
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  const createTask = async (task) => {
    setError("");
    try {
      const raw = await kanbanApi.createTask(task);
      setTasks(raw.map(normalizeTask));
      return true;
    } catch (e) {
      setError(e?.message || "Не удалось создать задачу");
      return false;
    }
  };

  const updateTask = async (id, task) => {
    setError("");
    try {
      const raw = await kanbanApi.updateTask(id, task);
      setTasks(raw.map(normalizeTask));
      return true;
    } catch (e) {
      setError(e?.message || "Не удалось сохранить задачу");
      return false;
    }
  };

  const deleteTask = async (id) => {
    setError("");
    try {
      const raw = await kanbanApi.deleteTask(id);
      setTasks(raw.map(normalizeTask));
      return true;
    } catch (e) {
      setError(e?.message || "Не удалось удалить задачу");
      return false;
    }
  };

  const getTaskLocal = (id) => tasks.find((t) => t.id === id) || null;

  const value = useMemo(
    () => ({ tasks, loading, error, fetchTasks, createTask, updateTask, deleteTask, getTaskLocal }),
    [tasks, loading, error]
  );

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
}

export function useTasks() {
  const ctx = useContext(TasksContext);
  if (!ctx) throw new Error("useTasks must be used within TasksProvider");
  return ctx;
}
