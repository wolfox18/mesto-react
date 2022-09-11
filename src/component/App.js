import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  return (
    <body className='page'>
      <Header />
      <Main />
      <Footer />
      <template id='element-template'>
        <li className='element'>
          <button className='element__delete-button transparent-btn'></button>
          <img src='#' alt='' className='element__image' />
          <div className='element__info'>
            <h2 className='element__title'></h2>
            <div className='element__like-container'>
              <button
                aria-label='Нравится'
                type='button'
                className='element__like transparent-btn transparent-btn_opacity_medium'
              ></button>
              <p className='element__like-counter'>1</p>
            </div>
          </div>
        </li>
      </template>

      <PopupWithForm name='profile' title='Редактировать профиль'>
        <input
          name='name'
          required
          placeholder='Имя'
          type='text'
          id='name'
          value='Жак-Ив Кусто'
          minLength='2'
          maxLength='40'
          className='popup__input popup__input_type_name'
        />
        <span className='popup__error-message name-error'></span>
        <input
          name='about'
          required
          placeholder='Информация'
          type='text'
          id='bio'
          value='Исследователь океана'
          minLength='2'
          maxLength='200'
          className='popup__input popup__input_type_description'
        />
        <span className='popup__error-message bio-error'></span>
      </PopupWithForm>
      <PopupWithForm name='new-element' title='Новое место'>
        <input
          name='name'
          required
          placeholder='Название'
          type='text'
          id='place'
          value=''
          minLength='2'
          maxLength='30'
          className='popup__input popup__input_type_place'
        />
        <span className='popup__error-message place-error'></span>
        <input
          name='link'
          required
          placeholder='Ссылка на картинку'
          id='url'
          type='url'
          value=''
          className='popup__input popup__input_type_url'
        />
        <span className='popup__error-message url-error'></span>
      </PopupWithForm>
      <PopupWithForm name='change-avatar' title='Обновить аватар'>
        <input
          name='link'
          required
          placeholder='Ссылка на аватар'
          id='avatar-url'
          type='url'
          value=''
          className='popup__input popup__input_type_url'
        />
        <span className='popup__error-message avatar-url-error'></span>
      </PopupWithForm>
      <PopupWithForm name='confirm' title='Вы уверены?'></PopupWithForm>

      <ImagePopup />

    </body>
  );
}

export default App;
