import styled from "styled-components";

import bgShorten from "../images/bg-shorten-desktop.svg";
import bgShortenMobile from "../images/bg-shorten-mobile.svg";
import Button from "../extras/Buttons";

const Title = styled.h2`
  text-align: center;
  padding: 0.5rem 0;
  padding-top: 2rem;
  color: #fff;
`;

const BeforeFooterDiv = styled.div`
  background: url(${bgShortenMobile}) no-repeat;
  background-color: ${(props) => props.theme.darkViolet};
  padding: 2rem 0;

  @media (min-width: 1010px) {
    background: url(${bgShorten}) no-repeat;
    background-color: ${(props) => props.theme.darkViolet};
  }
`;

function BeforeFooter() {
  return (
    <BeforeFooterDiv>
      <Title>Boost your links today</Title>
      <Button centeredBigScreen centered large>
        Get Started
      </Button>
    </BeforeFooterDiv>
  );
}

export default BeforeFooter;
