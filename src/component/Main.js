import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;

  //стейт данных пользователя
  const [userData, setUserData] = React.useState({
    name: "name",
    about: "description",
    avatar: "#",
  });
  //стейт карточек
  const [cards, setCards] = React.useState([]);

  //эффекты
  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setUserData(userData);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log("Ошибка API при загрузке первоначальных данных!", err);
      });
  }, []);
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
        <ul className="elements__list">
          {cards.map((cardData) => (
            <Card key={cardData._id} cardData={cardData} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
