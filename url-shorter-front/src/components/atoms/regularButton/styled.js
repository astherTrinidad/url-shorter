import styled from "styled-components";
import colors from "../../../assets/colors";

const ComponentStyled = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  button {
    border-radius: 0;
    border: white;
    background-color: ${colors.purple};
    color: white;
    cursor: pointer;
    font-weight: bold;
    margin: 1rem 0;
  }

  button:hover {
    background-color: ${colors.purpleDark};
  }
  .md {
    font-size: 1.25rem;
    font-weight: bold;
    padding: 1rem 1.5rem;
  }

  .sm {
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
  }
`;

export default ComponentStyled;
