import styled from "styled-components";
import illustrationError from "../../../assets/images/404.svg";

const ComponentStyled = styled.div`
  .page-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${illustrationError};
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default ComponentStyled;
