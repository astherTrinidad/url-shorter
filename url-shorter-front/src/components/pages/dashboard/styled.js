import styled from "styled-components";
import colors from "../../../assets/colors";
const ComponentStyled = styled.div`
  .page-container {
    min-height: 100vh;
    display: flex;
    flex-flow: column;
  }

  .App-logo {
    height: 10vmin;
  }

  .App-form {
    align-items: center;
    background-color: ${colors.lightGreen};
    justify-content: center;
    margin: 2rem auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 80%;
  }
`;

export default ComponentStyled;
