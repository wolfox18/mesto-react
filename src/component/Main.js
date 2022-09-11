import React from "react";


function Main(props) {
    const {onEditProfile, onAddPlace, onEditAvatar, userData} = props;
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={userData.avatar}
            alt="Аватар пользователя"
            className="profile__avatar"
          />
          <button
            onClick={onEditAvatar}
            className="profile__change-avatar"
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__name-block">
            <h1 className="profile__name">{userData.name}</h1>
            <button
              onClick={onEditProfile}
              aria-label="Редактировать профиль"
              type="button"
              className="profile__edit-btn transparent-btn"
            ></button>
          </div>

          <p className="profile__description">{userData.about}</p>
        </div>
        <button
          onClick={onAddPlace}
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
