import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.cyan};
  color: #fff;
  padding: ${(props) => (props.large ? "0.5rem 2.5rem" : "0.5rem 1.5rem")};
  font-size: 1.35rem;
  margin: ${(props) => (props.centered ? "0 auto" : "0")};
  margin-top: 1rem;
  font-weight: 600;
  text-align: center;
  border-radius: ${(props) => (props.rect ? "10px" : "30px")};
  border: 1px solid transparent;
  cursor: pointer;
  display: block;
  width: ${(props) => (props.full ? "100%" : "auto")};

  @media (min-width: 1010px) {
    margin: ${(props) => (props.centeredBigScreen ? "0 auto" : "0")};
    width: ${(props) => (props.full ? "100%" : "auto")};
  }
`;

export default Button;
