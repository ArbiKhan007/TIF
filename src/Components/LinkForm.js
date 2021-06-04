import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";

import Button from "../extras/Buttons";
import Wrapper from "../extras/Wrapper";
import blueDesign from "../images/bg-shorten-desktop.svg";
import blueDesignMobile from "../images/bg-shorten-mobile.svg";

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
  border: 1px solid ${(props) => props.theme.gray};
  outline: none;
  ::placeholder {
    color: ${(props) => props.theme.gray};
  }

  @media (min-width: 1010px) {
    margin: 0 1rem;
    flex: 1;
    border: 1px solid ${(props) => props.theme.gray};
    outline: none;
  }
`;

function LinkForm() {
  const [input, setInput] = useState();

  async function handleSubmit(e) {
    const config = {
      headers: { "Access-Control-Allow-Origin": "*" },
    };

    e.preventDefault();
    try {
      const url = await Axios.post(
        "https://api.shrtco.de/v2/shorten",
        {
          input,
        },
        config
      );
      if (url.ok) {
        console.log(url.result);
      } else {
        alert("Please Check");
      }
    } catch (e) {
      alert(e);
    }
  }

  return (
    <Wrapper>
      <MainForm method="post" onSubmit={handleSubmit}>
        <MainInput
          name="link"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Shorten a link here..."
        />

        <Button type="submit" full rect>
          Shorten It!
        </Button>
      </MainForm>
    </Wrapper>
  );
}

export default LinkForm;
