import { useEffect, useState } from "react";
import Column from "../Column";
import { cardsData } from "../../../data";

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
    <main className="main">
      <div className="container">
        <div className="main__block">
          {isLoading ? (
            <div className="loading">Данные загружаются</div>
          ) : (
            <div className="main__content">
              {statuses.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cards={cards.filter((card) => card.status === status)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
