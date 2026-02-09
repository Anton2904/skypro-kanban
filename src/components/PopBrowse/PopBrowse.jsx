import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useTasks } from "../../context/TasksContext";
import { formatDateRu, fromDateInputToIso, toIsoDateInputValue } from "../../utils/date";
import { getTaskById } from "../../services/kanban";

function getThemeClassByTopic(topic) {
  if (topic === "Research") return "_green";
  if (topic === "Copywriting") return "_purple";
  return "_orange";
}

function PopBrowse({ isOpen = false, cardId }) {
  const navigate = useNavigate();
  const { updateTask, deleteTask, getTaskLocal } = useTasks();

  const topics = useMemo(() => ["Web Design", "Research", "Copywriting"], []);
  const statuses = useMemo(() => ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"], []);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("Research");
  const [status, setStatus] = useState("Без статуса");
  const [dateValue, setDateValue] = useState("");

  useEffect(() => {
    if (!isOpen || !cardId) return;

    const local = getTaskLocal(cardId);
    if (local) {
      setTitle(local.title || "");
      setDescription(local.description || "");
      setTopic(local.topic || "Research");
      setStatus(local.status || "Без статуса");
      setDateValue(toIsoDateInputValue(local.date));
      return;
    }

    // если в сторе нет (например, прямая ссылка), тянем с сервера
    setLoading(true);
    setError("");
    getTaskById(cardId)
      .then((task) => {
        setTitle(task?.title || "");
        setDescription(task?.description || "");
        setTopic(task?.topic || "Research");
        setStatus(task?.status || "Без статуса");
        setDateValue(toIsoDateInputValue(task?.date));
      })
      .catch((e) => setError(e?.message || "Не удалось загрузить задачу"))
      .finally(() => setLoading(false));
  }, [isOpen, cardId, getTaskLocal]);

  const themeClass = getThemeClassByTopic(topic);

  const handleClose = (e) => {
    e?.preventDefault?.();
    navigate("/");
  };

  const handleEdit = (e) => {
    e?.preventDefault?.();
    setIsEditMode(true);
  };

  const handleCancel = (e) => {
    e?.preventDefault?.();
    setIsEditMode(false);
  };

  const handleSave = async (e) => {
    e?.preventDefault?.();
    setError("");

    if (!title.trim()) {
      setError("Введите название");
      return;
    }
    if (!description.trim()) {
      setError("Введите описание");
      return;
    }
    if (!dateValue) {
      setError("Выберите дату");
      return;
    }

    const ok = await updateTask(cardId, {
      title: title.trim(),
      topic,
      status,
      description: description.trim(),
      date: fromDateInputToIso(dateValue),
    });

    if (ok) setIsEditMode(false);
    else setError("Не удалось сохранить изменения");
  };

  const handleDelete = async (e) => {
    e?.preventDefault?.();
    const ok = window.confirm("Удалить задачу?\nДействие нельзя отменить.");
    if (!ok) return;
    const deleted = await deleteTask(cardId);
    if (deleted) navigate("/", { replace: true });
    else setError("Не удалось удалить задачу");
  };

  if (!isOpen) return null;

  return (
    <div className="pop-browse" id="popBrowse" style={{ display: "block" }}>
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{title || "Задача"}</h3>
              <div className={`categories__theme theme-top ${themeClass} _active-category`}>
                <p className={themeClass}>{topic}</p>
              </div>
            </div>

            {loading ? <div className="loading">Загружаем задачу...</div> : null}
            {!loading && error ? <div style={{ color: "#c00", marginTop: 8 }}>{error}</div> : null}

            <div className="pop-browse__wrap">
              <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                <div className="form-browse__block">
                  <label htmlFor="titleInput" className="subttl">
                    Название
                  </label>
                  <input
                    className="form-new__input"
                    id="titleInput"
                    type="text"
                    readOnly={!isEditMode}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly={!isEditMode}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>

                <div className="form-browse__block">
                  <label htmlFor="dateEdit" className="subttl">
                    Дата
                  </label>
                  <input
                    className="form-new__input"
                    id="dateEdit"
                    type="date"
                    disabled={!isEditMode}
                    value={dateValue}
                    onChange={(e) => setDateValue(e.target.value)}
                  />
                  {!isEditMode && dateValue ? (
                    <p style={{ marginTop: 6, fontSize: 12, color: "#94A6BE" }}>
                      Срок исполнения: {formatDateRu(fromDateInputToIso(dateValue))}
                    </p>
                  ) : null}
                </div>

                <div className="form-browse__block">
                  <label htmlFor="topicSelectEdit" className="subttl">
                    Категория
                  </label>
                  <select
                    className="form-new__input"
                    id="topicSelectEdit"
                    disabled={!isEditMode}
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

                <div className="form-browse__block">
                  <label htmlFor="statusSelectEdit" className="subttl">
                    Статус
                  </label>
                  <select
                    className="form-new__input"
                    id="statusSelectEdit"
                    disabled={!isEditMode}
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
              </form>
            </div>

            {cardId ? <p style={{ marginTop: 8, fontSize: 12, color: "#94A6BE" }}>ID: {cardId}</p> : null}

            {/* Кнопки просмотра */}
            <div className={`pop-browse__btn-browse ${isEditMode ? "_hide" : ""}`.trim()}>
              <div className="btn-group">
                <button type="button" className="btn-browse__edit _btn-bor _hover03" onClick={handleEdit}>
                  Редактировать задачу
                </button>
                <button type="button" className="btn-browse__delete _btn-bor _hover03" onClick={handleDelete}>
                  Удалить задачу
                </button>
              </div>

              <button type="button" className="btn-browse__close _btn-bg _hover01" onClick={handleClose}>
                Закрыть
              </button>
            </div>

            {/* Кнопки редактирования */}
            <div className={`pop-browse__btn-edit ${isEditMode ? "" : "_hide"}`.trim()}>
              <div className="btn-group">
                <button type="button" className="btn-edit__edit _btn-bg _hover01" onClick={handleSave}>
                  Сохранить
                </button>
                <button type="button" className="btn-edit__edit _btn-bor _hover03" onClick={handleCancel}>
                  Отменить
                </button>
                <button type="button" className="btn-edit__delete _btn-bor _hover03" id="btnDelete" onClick={handleDelete}>
                  Удалить
                </button>
              </div>

              <button type="button" className="btn-edit__close _btn-bg _hover01" onClick={handleClose}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopBrowse;
