import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useTasks } from "../../context/TasksContext";
import { fromDateInputToIso, toIsoDateInputValue } from "../../utils/date";

function PopNewCard({ isOpen = false }) {
  const navigate = useNavigate();
  const { createTask } = useTasks();

  const topics = useMemo(() => ["Web Design", "Research", "Copywriting"], []);
  const statuses = useMemo(() => ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"], []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("Research");
  const [status, setStatus] = useState("Без статуса");
  const [dateValue, setDateValue] = useState(() => toIsoDateInputValue(new Date().toISOString()));

  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = (e) => {
    e?.preventDefault?.();
    navigate("/");
  };

  const handleCreate = async (e) => {
    e?.preventDefault?.();
    setFormError("");

    // минимальная валидация (требования проекта: валидировать все поля формы)
    if (!title.trim()) {
      setFormError("Введите название задачи");
      return;
    }
    if (!description.trim()) {
      setFormError("Введите описание задачи");
      return;
    }
    if (!topic) {
      setFormError("Выберите категорию");
      return;
    }
    if (!status) {
      setFormError("Выберите статус");
      return;
    }
    if (!dateValue) {
      setFormError("Выберите дату");
      return;
    }

    setIsSubmitting(true);
    const result = await createTask({
      title: title.trim(),
      topic,
      status,
      description: description.trim(),
      date: fromDateInputToIso(dateValue),
    });
    setIsSubmitting(false);

    if (result.ok) {
      navigate("/", { replace: true });
    } else {
      setFormError(result.message || "Не удалось создать задачу. Проверьте данные и повторите.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="pop-new-card" id="popNewCard" style={{ display: "block" }}>
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>

            <button type="button" className="pop-new-card__close" onClick={handleClose} aria-label="Закрыть">
              &#10006;
            </button>

            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new" id="formNewCard" onSubmit={handleCreate}>
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="form-new__block">
                  <label htmlFor="dateInput" className="subttl">
                    Дата
                  </label>
                  <input
                    className="form-new__input"
                    type="date"
                    id="dateInput"
                    value={dateValue}
                    onChange={(e) => setDateValue(e.target.value)}
                  />
                </div>

                <div className="form-new__block">
                  <label htmlFor="topicSelect" className="subttl">
                    Категория
                  </label>
                  <select
                    className="form-new__input"
                    id="topicSelect"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  >
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-new__block">
                  <label htmlFor="statusSelect" className="subttl">
                    Статус
                  </label>
                  <select
                    className="form-new__input"
                    id="statusSelect"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    {statuses.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {formError ? <div style={{ color: "#c00", marginTop: 12 }}>{formError}</div> : null}

                <button className="form-new__create _hover01" id="btnCreate" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Создаем..." : "Создать задачу"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
