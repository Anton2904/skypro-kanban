import Card from "../Card";

function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>

      <div className="cards">
        {/* пока статично 1 карточка; позже заменим на map по данным */}
        <Card theme="orange" themeText="Web Design" date="30.10.23" />
      </div>
    </div>
  );
}

export default Column;
