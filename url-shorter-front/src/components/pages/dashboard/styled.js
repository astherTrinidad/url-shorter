import styled from "styled-components";
import colors from "../../../assets/colors";

const ComponentStyled = styled.div`
  .page-container {
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
  }

  .App-logo {
    height: 10vmin;
  }

  .App-form {
    align-items: center;
    background-color: ${colors.lightGreen};
    justify-content: center;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
  }
`;

export default ComponentStyled;
