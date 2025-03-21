import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Button from "../extras/Buttons";
import Wrapper from "../extras/Wrapper";
import Output from "../Components/Output";
import blueDesign from "../images/bg-shorten-desktop.svg";
import blueDesignMobile from "../images/bg-shorten-mobile.svg";

const FormDiv = styled.div``;

const MainForm = styled.form`
  background: url(${blueDesignMobile}) no-repeat;
  background-color: ${(props) => props.theme.darkViolet};
  width: 100%;
  display: block;
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 10px;
  border: 1px solid transparent;

  @media (min-width: 1010px) {
    margin: 1rem 0;
    background: url(${blueDesign}) no-repeat;
    display: flex;
    background-color: ${(props) => props.theme.darkViolet};
  }
`;

const MainInput = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
  border: ${(props) => (props.empty ? "2px solid red" : "1px solid gray")};
  outline: none;
  ::placeholder {
    color: ${(props) => props.theme.gray};
  }

  @media (min-width: 1010px) {
    margin: 0 1rem;
    flex: 1;

    outline: none;
  }
`;

function LinkForm() {
  const [input, setInput] = useState();
  const [output, setOutput] = useState();
  const [isEmpty, setIsEmpty] = useState(false);
  const [isWaiting, setIsWaiting] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!input) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      setOutput();
      setIsWaiting(true);
      var config = {
        method: "post",
        url: "http://13.201.93.196:8080/v1/shorten",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          originalUrl: input,
        },
      };

      axios(config)
        .then(function (response) {
          const shortCode = response.data;
          setOutput(`http://13.201.93.196:8080/v1/${shortCode}`);
          setIsWaiting(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <FormDiv>
      <Wrapper>
        <MainForm method="get" onSubmit={handleSubmit}>
          <MainInput
            empty={isEmpty}
            name="link"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Shorten a link here..."
          />

          <Button type="submit" rect>
            Shorten It!
          </Button>
        </MainForm>
      </Wrapper>
      {output ? (
        <Output inputLink={input} outputLinks={output} />
      ) : (
        <span>{isWaiting ? "Loading...." : ""}</span>
      )}
    </FormDiv>
  );
}

export default LinkForm;
