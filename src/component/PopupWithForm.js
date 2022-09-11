import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container popup__container_type_form">
        <button
          aria-label="Закрыть"
          type="button"
          className="popup__close-btn transparent-btn"
        ></button>
        <form name="${props.name}-form" className="popup__form" noValidate>
          <h2 className="popup__title">{props.title}</h2>

          {props.children}

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