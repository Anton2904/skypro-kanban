import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import Main from "../../components/Main";
import PopBrowse from "../../components/PopBrowse";

function CardPage() {
  const { id } = useParams();

  return (
    <div className="wrapper">
      <PopBrowse isOpen cardId={id} />
      <Header />
      <Main />
    </div>
  );
}

export default CardPage;
