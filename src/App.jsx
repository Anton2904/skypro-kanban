import { useState } from "react";

import AppRoutes from "./routes/AppRoutes";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} />;
}

export default App;
