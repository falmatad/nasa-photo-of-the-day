import React from "react";
import styled from "styled-components";
const Paragraph = styled.p`
  transition: transform 0.2s ease-in;
  text-align: justify;
  color: #474747;
  font-size: 18px;
  background: #2eb29a;
  margin: 0;
  padding: 10px;
  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
`;
const ParagraphCard = props => {
  return (
        <Paragraph>{props.description}</Paragraph>
  );
};
export default ParagraphCard;