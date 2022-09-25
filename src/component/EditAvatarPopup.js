import React from "react";

function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar}) {
    const inputRef = React.useRef();
    
    function handleSubmit (e){
        e.preventDefault();
        onUpdateAvatar(inputRef.current.value);
    }

    return (
        <div className={`popup popup_type_change-avatar ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_type_form">
        <button
          onClick={onClose}
          aria-label="Закрыть"
          type="button"
          className="popup__close-btn transparent-btn"
        ></button>
        <form
          name="${name}-form"
          className="popup__form"
          noValidate
          onSubmit={handleSubmit}
        >
          <h2 className="popup__title">Обновить аватар</h2>

          <input
            ref={inputRef}
            name="link"
            required
            placeholder="Ссылка на аватар"
            id="avatar-url"
            type="url"
            // value=""
            className="popup__input popup__input_type_url"
          />
          <span className="popup__error-message avatar-url-error"></span>

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
    )
}

export default EditAvatarPopup;