import React from "react";

function ImagePopup(props){
    return(
        <div className="popup popup_type_image">
        <div className="popup__container">
          <button
            aria-label="Закрыть"
            type="button"
            className="popup__close-btn transparent-btn"
          ></button>
          <img src={props.link} alt={props.name} className="popup__image" />
          <p className="popup__image-name">{props.name}</p>
        </div>
      </div>
    )
}

export default ImagePopup;