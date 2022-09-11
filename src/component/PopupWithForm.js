import React from "react";

function PopupWithForm(props) {
  const { name, title, children, isOpen, onClose } = props;
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_type_form">
        <button
          onClick={onClose}
          aria-label="Закрыть"
          type="button"
          className="popup__close-btn transparent-btn"
        ></button>
        <form name="${name}-form" className="popup__form" noValidate>
          <h2 className="popup__title">{title}</h2>

          {children}

          <button
            aria-label="Сохранить"
            type="submit"
            className="popup__save-btn transparent-btn transparent-btn_opacity_hard"
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
