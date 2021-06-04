import React from "react";
import styled from "styled-components";

import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import pintersestIcon from "../images/icon-pinterest.svg";
import instagramIcon from "../images/icon-instagram.svg";
import Wrapper from "../extras/Wrapper";

const FooterDiv = styled.div`
  background-color: ${(props) => props.theme.darkBlue};
  color: #fff;
  text-align: center;

  @media (min-width: 1010px) {
    text-align: left;
  }
`;

const FeaturesDiv = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;

  @media (min-width: 1010px) {
    flex: 1;
  }
`;

const Icon = styled.img`
  @media (min-width: 1010px) {
    margin: 0 1rem;
  }
`;

const SocialMediaIconsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 2rem;

  @media (min-width: 1010px) {
    padding: 0;
    flex: 1;
  }
`;

const Logo = styled.h1`
  color: #fff;
  padding: 2rem 0;

  @media (min-width: 1010px) {
    padding: 0;
    flex: 2;
    line-height: 2rem;
  }
`;

const FooterContainer = styled.div`
  @media (min-width: 1010px) {
    display: flex;
    justify-content: space-between;
    padding: 3.5rem 0;
  }
`;

const Feature = styled.li`
  font-weight: ${(props) => (props.bold ? 700 : 500)};
  color: ${(props) => (props.white ? "#fff" : props.theme.gray)};
  margin-bottom: 0.65rem;

  @media (min-width: 1010px) {
    margin-bottom: 1rem;
  }
`;

function Footer() {
  return (
    <FooterDiv>
      <Wrapper>
        <FooterContainer>
          <Logo>Shortly</Logo>
          <FeaturesDiv>
            <Feature bold white>
              Features
            </Feature>
            <Feature>Features</Feature>
            <Feature>Features</Feature>
            <Feature>Features</Feature>
          </FeaturesDiv>
          <FeaturesDiv>
            <Feature bold white>
              Features
            </Feature>
            <Feature>Features</Feature>
            <Feature>Features</Feature>
            <Feature>Features</Feature>
          </FeaturesDiv>
          <FeaturesDiv>
            <Feature bold white>
              Features
            </Feature>
            <Feature>Features</Feature>
            <Feature>Features</Feature>
            <Feature>Features</Feature>
          </FeaturesDiv>
          <SocialMediaIconsDiv>
            <a href="/">
              <Icon src={facebookIcon}></Icon>
            </a>
            <a href="#">
              <Icon src={twitterIcon}></Icon>
            </a>
            <a href="#">
              <Icon src={pintersestIcon}></Icon>
            </a>
            <a href="#">
              <Icon src={instagramIcon}></Icon>
            </a>
          </SocialMediaIconsDiv>
        </FooterContainer>
      </Wrapper>
    </FooterDiv>
  );
}

export default Footer;
