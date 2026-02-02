import { useParams } from "react-router-dom";
import styled from "styled-components";

import Header from "../../components/Header";
import Main from "../../components/Main";
import PopBrowse from "../../components/PopBrowse";

const RouteId = styled.div`
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 50;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #d4dbe5;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 14px;
  color: #1a1a1a;
`;

function CardPage() {
  const { id } = useParams();

  return (
    <div className="wrapper">
      <RouteId>ID карточки: {id}</RouteId>
      <PopBrowse isOpen cardId={id} />
      <Header />
      <Main />
    </div>
  );
}

export default CardPage;
