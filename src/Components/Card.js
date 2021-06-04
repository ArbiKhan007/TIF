import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 60px;
`;

const Icon = styled.img`
  transform: translateY(-50%);
  margin: -20px 0;
  clip-path: circle(50%);
  padding: 20px;
  background-color: ${(props) => props.theme.darkViolet};
`;

const Title = styled.h2``;

const Para = styled.p`
  color: ${(props) => props.theme.gray};
  padding: 1rem 0;
`;

function Card(props) {
  return (
    <CardDiv>
      <Icon src={props.img}></Icon>
      <Title>{props.title}</Title>
      <Para>{props.text}</Para>
    </CardDiv>
  );
}

export default Card;
