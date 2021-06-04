import React from "react";
import styled from "styled-components";

import Button from "../extras/Buttons";
import Wrapper from "../extras/Wrapper";
import heroimage from "../images/illustration-working.svg";
import RowDiv from "../Row/Row";

const HeroSection = styled.div`
  text-align: center;
  padding: 0 0.65rem;

  @media (min-width: 1010px) {
    padding: 3rem 0;
    text-align: left;
    height: 520px;
    width: auto;
  }
`;

const BtnContainer = styled.div`
  margin: 1rem 0;
`;

const HeroHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;

  @media (min-width: 1010px) {
    font-size: 4rem;
  }
`;

const SubHeading = styled.h3`
  color: ${(props) => props.theme.gray};
  margin: 1rem 0;
`;

function HeroContent() {
  return (
    <Wrapper>
      <HeroSection>
        <RowDiv>
          <img alt="great big" src={heroimage}></img>
        </RowDiv>
        <RowDiv>
          <HeroHeading>More than just shorter links</HeroHeading>
          <SubHeading>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </SubHeading>
          <BtnContainer>
            <Button large centered>
              Get Started
            </Button>
          </BtnContainer>
        </RowDiv>
      </HeroSection>
    </Wrapper>
  );
}

export default HeroContent;
