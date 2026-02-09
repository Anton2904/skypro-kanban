import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksContext";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <AppRoutes />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
