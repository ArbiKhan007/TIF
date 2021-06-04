import styled from "styled-components";

import Card from "./Card";
import brandRecognition from "../images/icon-brand-recognition.svg";
import detailedRecords from "../images/icon-detailed-records.svg";
import fullyCustom from "../images/icon-fully-customizable.svg";
import Wrapper from "../extras/Wrapper";

const MidSection = styled.div`
  background-color: #f1f1f1;
  padding: 3rem 0;
`;

const CardContainer = styled.div`
  display: block;
  margin: 2rem 0;
  padding: 1rem;

  @media (min-width: 1010px) {
    padding: 0;
    margin: 3rem 0;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 30px;
  }
`;

const Heading = styled.h1`
  text-align: center;
  padding: 0 3rem;
  padding-top: 4rem;
`;

const SubHeading = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.gray};

  @media (min-width: 1010px) {
    padding: 0 280px;
  }
`;

function MidContent() {
  return (
    <MidSection>
      <Wrapper>
        <Heading>Advanced Statistics</Heading>

        <SubHeading>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </SubHeading>
        <CardContainer>
          <Card
            img={brandRecognition}
            title="Brand Recognition"
            text="I've spent days trying to figure this out in the past. There just had to be a way! There just had to be a way! There just had to be a way! There just had to be a way!"
          />

          <Card
            img={detailedRecords}
            title="Brand Recognition"
            text="I've spent days trying to figure this out in the past. There just had to be a way! There just had to be a way! There just had to be a way! There just had to be a way!"
          />

          <Card
            img={fullyCustom}
            title="Brand Recognition"
            text="I've spent days trying to figure this out in the past. There just had to be a way! There just had to be a way! There just had to be a way! There just had to be a way!"
          />
        </CardContainer>
      </Wrapper>
    </MidSection>
  );
}

export default MidContent;
