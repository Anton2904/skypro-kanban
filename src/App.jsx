import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import PopNewCard from "./components/PopNewCard";
import PopBrowse from "./components/PopBrowse";

function App() {
  return (
    <div className="wrapper">
      {/* pop-ups */}
      <PopNewCard />
      <PopBrowse />
      {/* /pop-ups */}

      <Header />
      <Main />
    </div>
  );
}

export default App;
