import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isPopupAvatarOpened, setIsPopupAvatarOpen] = React.useState(false);
  const [isPopupProfileOpened, setIsPopupProfileOpen] = React.useState(false);
  const [isPopupAddPlaceOpened, setIsPopupAddPlaceOpened] =
    React.useState(false);
  const [isPopupImageOpened, setIsPopupImageOpened] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log("Ошибка API при загрузке первоначальных данных!", err);
      });
  }, []);

  function handleEditAvatarClick() {
    setIsPopupAvatarOpen(true);
  }
  function handleEditProfileClick() {
    setIsPopupProfileOpen(true);
  }
  function handleAddPlaceClick() {
    setIsPopupAddPlaceOpened(true);
  }
  function closeAllPopups() {
    setIsPopupAvatarOpen(false);
    setIsPopupProfileOpen(false);
    setIsPopupAddPlaceOpened(false);
    setIsPopupImageOpened(false);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
    setIsPopupImageOpened(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          isOpen={isPopupProfileOpened}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <input
            name="name"
            required
            placeholder="Имя"
            type="text"
            id="name"
            value="Жак-Ив Кусто"
            minLength="2"
            maxLength="40"
            className="popup__input popup__input_type_name"
          />
          <span className="popup__error-message name-error"></span>
          <input
            name="about"
            required
            placeholder="Информация"
            type="text"
            id="bio"
            value="Исследователь океана"
            minLength="2"
            maxLength="200"
            className="popup__input popup__input_type_description"
          />
          <span className="popup__error-message bio-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="new-element"
          title="Новое место"
          isOpen={isPopupAddPlaceOpened}
          onClose={closeAllPopups}
          buttonText="Создать"
        >
          <input
            name="name"
            required
            placeholder="Название"
            type="text"
            id="place"
            value=""
            minLength="2"
            maxLength="30"
            className="popup__input popup__input_type_place"
          />
          <span className="popup__error-message place-error"></span>
          <input
            name="link"
            required
            placeholder="Ссылка на картинку"
            id="url"
            type="url"
            value=""
            className="popup__input popup__input_type_url"
          />
          <span className="popup__error-message url-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="change-avatar"
          title="Обновить аватар"
          isOpen={isPopupAvatarOpened}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <input
            name="link"
            required
            placeholder="Ссылка на аватар"
            id="avatar-url"
            type="url"
            value=""
            className="popup__input popup__input_type_url"
          />
          <span className="popup__error-message avatar-url-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          onClose={closeAllPopups}
          buttonText="Да"
        ></PopupWithForm>

        <ImagePopup
          card={selectedCard}
          isOpen={isPopupImageOpened}
          onClose={() => {
            closeAllPopups();
            setSelectedCard({});
          }}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
