import React from "react";
// import {
//   Card, CardImg, CardText, CardBody, CardLink,
//   CardTitle, CardSubtitle
// } from 'reactstrap';
const ImageCard = props => {
  if (!props.image) return <h3>Loading...</h3>;

  return (
    <div className="item-card">
        <h1>{props.title}</h1>
        <img className="item-image" src = {props.image}></img>
    </div>
  );
};
export default ImageCard;