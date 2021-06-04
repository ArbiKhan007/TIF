import { useState } from "react";
import styled from "styled-components";
import Button from "../extras/Buttons";
import Wrapper from "../extras/Wrapper";

const OutputDiv = styled.div`
  padding: 0.75rem;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  display: block;

  @media (min-width: 1010px) {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    flex: 1;
    color: ${(props) => props.theme.cyan};
  }
`;

const InputText = styled.h3`
  text-align: center;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.gray};

  @media (min-width: 1010px) {
    text-align: left;
    border: 0;
    flex: 3;
    color: ${(props) => props.theme.cyan};
  }
`;

const OutputText = styled.h3`
  text-align: center;
  padding: 1rem;
  @media (min-width: 1010px) {
    flex: 1;
    color: ${(props) => props.theme.cyan};
  }
`;

const OutputContainer = styled.div`
  background-color: #f1f1f1;
  padding-top: 1rem;
`;

function Output(props) {
  const [copy, setCopy] = useState();

  function handleClick() {
    navigator.clipboard.writeText(props.outputLinks);
    setCopy(true);
  }

  return (
    <OutputContainer>
      <Wrapper>
        <OutputDiv>
          <InputText>{props.inputLink}</InputText>
          <OutputText>{props.outputLinks}</OutputText>
          <Button onClick={handleClick} full rect large>
            {copy ? "Copied" : "Copy"}
          </Button>
        </OutputDiv>
      </Wrapper>
    </OutputContainer>
  );
}

export default Output;
