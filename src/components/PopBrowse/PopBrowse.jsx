import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import Calendar from "../Calendar";

/**
 * PopBrowse — попап просмотра/редактирования задачи.
 * В рамках учебного проекта делаем предсказуемое UI-поведение:
 * - "Закрыть" → возвращает на главную (/)
 * - "Редактировать" → включает режим редактирования (показывает блок кнопок сохранения)
 * - "Отменить" → возвращает режим просмотра
 * - "Сохранить" → сохраняет (имитация) и возвращает режим просмотра
 * - "Удалить" → подтверждение и возврат на главную
 */
function PopBrowse({ isOpen = false, cardId }) {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [description, setDescription] = useState("");

  const title = useMemo(() => "Название задачи", []);

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

  const handleSave = (e) => {
    e?.preventDefault?.();
    // Здесь будет сохранение (API / state). Пока — имитация.
    setIsEditMode(false);
  };

  const handleDelete = (e) => {
    e?.preventDefault?.();
    const ok = window.confirm("Удалить задачу?\nДействие нельзя отменить.");
    if (!ok) return;
    // Здесь будет удаление (API / state). Пока — имитация.
    navigate("/");
  };

  if (!isOpen) return null;

  return (
    <div className="pop-browse" id="popBrowse" style={{ display: "block" }}>
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{title}</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
              </div>
            </div>

            <div className="pop-browse__wrap">
              <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
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
              </form>

              <Calendar mode={isEditMode ? "edit" : "browse"} />
            </div>

            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>

            {/* ID показываем явно (полезно для проверки) */}
            {cardId ? (
              <p style={{ marginTop: 8, fontSize: 12, color: "#94A6BE" }}>ID: {cardId}</p>
            ) : null}

            {/* Кнопки просмотра */}
            <div className={`pop-browse__btn-browse ${isEditMode ? "_hide" : ""}`.trim()}>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn-browse__edit _btn-bor _hover03"
                  onClick={handleEdit}
                >
                  Редактировать задачу
                </button>
                <button
                  type="button"
                  className="btn-browse__delete _btn-bor _hover03"
                  onClick={handleDelete}
                >
                  Удалить задачу
                </button>
              </div>

              <button
                type="button"
                className="btn-browse__close _btn-bg _hover01"
                onClick={handleClose}
              >
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
                <button
                  type="button"
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                  onClick={handleDelete}
                >
                  Удалить задачу
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
