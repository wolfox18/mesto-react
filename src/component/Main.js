import React from "react";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;

  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([initialCards]) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log("Ошибка API при загрузке первоначальных данных!", err);
      });
  }, []);

  function handleCardLike(card) {
    console.log("handleCardLike started");
    // const isLiked = card.likes.some((user) => user._id === currentUser._id);
    // api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
    //   setCards(cards.map((oldCard) => (oldCard._id === card._id ? newCard : oldCard)));
    // });
  }

  function handleCardDelete(card) {
    console.log("handleCardDelete started");
    // api.deleteCard(card._id).then(() => {
    //   setCards(cards.filter((oldCard) => (oldCard._id !== card._id)));
    // });
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={currentUser.avatar}
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
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              onClick={onEditProfile}
              aria-label="Редактировать профиль"
              type="button"
              className="profile__edit-btn transparent-btn"
            ></button>
          </div>

          <p className="profile__description">{currentUser.about}</p>
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
            <Card
              key={cardData._id}
              card={cardData}
              onCardClick={onCardClick}
              onLikeClick={handleCardLike}
              onDeleteClick={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
