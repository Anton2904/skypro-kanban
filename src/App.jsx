import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksContext";

import "./styles/popups.css";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Wrapper } from "./App.styled";

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
