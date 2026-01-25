import Header from "./components/Header";
import Main from "./components/Main";
import PopNewCard from "./components/PopNewCard";
import PopBrowse from "./components/PopBrowse";

import "./styles/popups.css";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Wrapper } from "./App.styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
      {/* pop-ups */}
      <PopNewCard />
      <PopBrowse />
      {/* /pop-ups */}

      <Header />
      <Main />
      </Wrapper>
    </>
  );
}

export default App;
