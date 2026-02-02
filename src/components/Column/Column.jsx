import Card from "../Card";
import { CardsList, ColumnRoot, ColumnTitle } from "./Column.styled";

function Column({ title, cards = [] }) {
  return (
    <ColumnRoot>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>

      <CardsList>
        {cards.map((card) => (
          <Card key={card.id} topic={card.topic} title={card.title} date={card.date} />
        ))}
      </CardsList>
    </ColumnRoot>
  );
}

export default Column;
