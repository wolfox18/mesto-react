import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isPopupAvatarOpened, setIsPopupAvatarOpen] = React.useState(false);
  const [isPopupProfileOpened, setIsPopupProfileOpen] = React.useState(false);
  const [isPopupAddPlaceOpened, setIsPopupAddPlaceOpened] =
    React.useState(false);
  const [isPopupImageOpened, setIsPopupImageOpened] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([initialCards]) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log("Ошибка API при загрузке первоначальных данных!", err);
      });
  }, []);

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

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards(
        cards.map((oldCard) => (oldCard._id === card._id ? newCard : oldCard))
      );
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards(cards.filter((oldCard) => oldCard._id !== card._id));
    });
  }

  function handleEditAvatarClick() {
    setIsPopupAvatarOpen(true);
  }
  function handleEditProfileClick() {
    console.log("пышь");
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

  function handeUpdateUser(user) {
    api
      .patchUserInfo(user)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log("Ошибка API при обновлении данных пользователя!", err);
      });
  }

  function handleUpdateAvatar(url) {
    //костьль с переписанием объекта, надо подумать и переделать....
    api
      .changeAvatar(url)
      .then(() => {
        setCurrentUser({
          name: currentUser.name,
          about: currentUser.about,
          _id: currentUser._id,
          cohort: currentUser.cohort,
          avatar: url,
        });
      })
      .catch((err) => {
        console.log("Ошибка при обновлении аватара: ", err);
      });
    closeAllPopups();
  }

  function handleAddPlaceSubmit(cardData) {
    api
      .postNewCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => {
        console.log("Ошибка при обновлении аватара: ", err);
      });
      closeAllPopups();
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <EditProfilePopup>
          isOpen={isPopupProfileOpened}
          onClose={closeAllPopups}
          onUpdateUser={handeUpdateUser}
        </EditProfilePopup>
        <AddPlacePopup
          isOpen={isPopupAddPlaceOpened}
          onClose={closeAllPopups}
          onAddCard={handleAddPlaceSubmit}
        />
        <EditAvatarPopup
          isOpen={isPopupAvatarOpened}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
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
