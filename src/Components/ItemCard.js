import React from "react";
import styled from "styled-components";
const ImageCard = props => {
  if (!props.image) return <h3>Loading...</h3>;
  const TitleCard = styled.h4`
    font-size: 25px;
    color: #474747;
    transition: transform 0.2s ease-in;
    &:hover {
      transform: translateY(-5px) scale(1.05);
    }
  `;
  const ImageCard = styled.div`
    transition: transform 0.2s ease-in;
    // background: #99f3eb;
    color: black;
    width: 60%;
    max-height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    cursor: pointer;
    box-shadow: 0px 1px 6px -2px grey;

    &:hover {
      transform: translateY(-5px) scale(1.05);
    }
    img {
      width: 680px;
    height: 500px;
    object-fit: scale;
    flex-shrink: 1;
    }
`;

  return (
    <>
    <TitleCard>{props.title}</TitleCard>
    <ImageCard>
        <img className="item-image" src = {props.image}></img>
    </ImageCard>
    </>
  );
};
export default ImageCard;