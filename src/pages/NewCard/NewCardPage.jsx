import Header from "../../components/Header";
import Main from "../../components/Main";
import PopNewCard from "../../components/PopNewCard";

function NewCardPage() {
  return (
    <div className="wrapper">
      <PopNewCard isOpen />
      <Header />
      <Main />
    </div>
  );
}

export default NewCardPage;
