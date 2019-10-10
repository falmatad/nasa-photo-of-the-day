import React from "react";

const ImageCard = props => {
  return (
    <div className="item-card">
        <h1>{props.title}</h1>
        <img className="item-image" src = {props.image}></img>
    </div>
  );
};
export default ImageCard;