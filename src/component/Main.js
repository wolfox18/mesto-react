import React from "react";

function handleEditAvatarClick() {
  document
    .querySelector(".popup_type_change-avatar")
    .classList.add("popup_opened");
}

function handleEditProfileClick() {
  document.querySelector(".popup_type_profile").classList.add("popup_opened");
}

function handleAddPlaceClick() {
  document
    .querySelector(".popup_type_new-element")
    .classList.add("popup_opened");
}

function Main() {
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src="<%=require('./images/blankperson.png')%>"
            alt="Аватар пользователя"
            className="profile__avatar"
          />
          <button
            onClick={handleEditAvatarClick}
            className="profile__change-avatar"
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__name-block">
            <h1 className="profile__name">profile name</h1>
            <button
              onClick={handleEditProfileClick}
              aria-label="Редактировать профиль"
              type="button"
              className="profile__edit-btn transparent-btn"
            ></button>
          </div>

          <p className="profile__description">profile bio</p>
        </div>
        <button
          onClick={handleAddPlaceClick}
          aria-label="Добавить запись"
          type="button"
          className="profile__post-add transparent-btn"
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;
