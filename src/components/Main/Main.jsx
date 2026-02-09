import { useMemo } from "react";
import Column from "../Column";
import { useTasks } from "../../context/TasksContext";

function Main() {
  const { tasks, loading, error, fetchTasks } = useTasks();
  const statuses = useMemo(
    () => ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"],
    []
  );

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          {loading ? <div className="loading">Данные загружаются...</div> : null}

          {!loading && error ? (
            <div className="loading" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div>Ошибка: {error}</div>
              <button type="button" className="_hover01" onClick={fetchTasks}>
                Повторить
              </button>
            </div>
          ) : null}

          {!loading && !error ? (
            <div className="main__content">
              {statuses.map((status) => (
                <Column key={status} title={status} cards={tasks.filter((card) => card.status === status)} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}

export default Main;
