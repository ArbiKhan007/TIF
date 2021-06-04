import React, { useState } from "react";
import styles from "styled-components";

import logoIcon from "../images/logo.svg";
import Button from "../extras/Buttons";
import Wrapper from "../extras/Wrapper";

const Nav = styles.nav`
    display: flex;
    
    @media (min-width: 1010px){
      margin: 1rem 0;
    }
`;

const Logo = styles.h1`
    padding: 1rem 0;
    flex: 1;

    @media (min-width: 1010px){
        flex: 1;
    }
`;

const ThreeBars = styles.div`
    margin: 1rem;
    cursor: pointer;

    @media (min-width: 1010px){
        margin: 0;
    }
`;

const List = styles.ul`
    height: ${(props) => (props.visible ? "280px" : "0")};
    overflow: hidden;
    position: absolute;
    left: 20px;
    top: 60px;
    right: 20px;
    padding: 0 1rem;
    border-radius: 10px;
    background-color: ${(props) => props.theme.darkViolet};
    transition: height .5s ease-out;

    @media (min-width: 1010px){
        height: auto;
        z-index: 1;
        position: relative;
        left: 0;
        top: 0;
        right: 0;
        padding: 0;
        display: flex;
        flex: 2;
        background-color: #fff;
        justify-content: ${(props) =>
          props.right ? "flex-end" : "flex-start"};
    }
`;

const ListItem = styles.li`
    font-size: 1.2rem;
    margin: 1.2rem 0;
    font-weight: 500;
    text-align: center;
    list-style: none;
    cursor: pointer;
    color: #fff;
    border-radius: 30px;

    @media (min-width: 1010px){
        color: #000;
        margin: 0;
        padding: 0rem 1rem;
    }
`;

const SingleBar = styles.div`
    background-color: ${(props) => props.theme.gray};
    height: 4px;
    width: 18px;
    margin: 2px;
    border-radius: 2px;

    @media (min-width: 1010px) {
        display: none;    
    }
`;

function Navbar() {
  const [visible, setVisible] = useState(false);

  function handleClick(e) {
    setVisible((prev) => !prev);
  }

  return (
    <Wrapper>
      <Nav>
        <Logo>
          <picture>
            <img src={logoIcon} alt="" srcset="" />
          </picture>
        </Logo>

        <ThreeBars onClick={handleClick}>
          <SingleBar />
          <SingleBar />
          <SingleBar />
        </ThreeBars>

        <List right visible={visible}>
          <ListItem>Features</ListItem>
          <ListItem>Pricing</ListItem>
          <ListItem>Resources</ListItem>
          <ListItem>Login</ListItem>
          <Button full>Sign Up</Button>
        </List>
      </Nav>
    </Wrapper>
  );
}

export default Navbar;
