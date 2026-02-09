import { useState } from "react";

import AppRoutes from "./routes/AppRoutes";

import "./styles/popups.css";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Wrapper } from "./App.styled";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} />;
}

export default App;
