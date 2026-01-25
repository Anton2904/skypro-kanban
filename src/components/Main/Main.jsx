import { useEffect, useState } from "react";
import Column from "../Column";
import { cardsData } from "../../../data";
import { Container } from "../../styles/Common.styled";
import { Content, Loading, MainBlock, MainRoot } from "./Main.styled";

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(cardsData);
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const statuses = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];

  return (
    <MainRoot>
      <Container>
        <MainBlock>
          {isLoading ? (
            <Loading>Данные загружаются</Loading>
          ) : (
            <Content>
              {statuses.map((status) => (
                <Column key={status} title={status} cards={cards.filter((card) => card.status === status)} />
              ))}
            </Content>
          )}
        </MainBlock>
      </Container>
    </MainRoot>
  );
}

export default Main;
