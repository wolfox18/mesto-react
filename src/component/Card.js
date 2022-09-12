import React from "react";

function Card(props) {
  const {cardData, onCardClick} = props;
  function handleClick() {
    onCardClick(cardData);
  }  
  return (
    <li key={cardData.id} className="element">
      <button className="element__delete-button transparent-btn"></button>
      <img onClick={handleClick} src={cardData.link} alt={cardData.name} className="element__image" />
      <div className="element__info">
        <h2 className="element__title">{cardData.name}</h2>
        <div className="element__like-container">
          <button
            aria-label="Нравится"
            type="button"
            className="element__like transparent-btn transparent-btn_opacity_medium"
          ></button>
          <p className="element__like-counter">{cardData.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
