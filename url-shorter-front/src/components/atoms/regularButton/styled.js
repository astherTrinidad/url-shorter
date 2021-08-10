import styled from "styled-components";
import colors from "../../../assets/colors";

const ComponentStyled = styled.div`
  button {
    border-radius: 0;
    border: white;
    background-color: ${colors.purple};
    color: white;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: bold;
    margin: 1rem 0 0 0;
    padding: 1rem 1.5rem;
  }

  button:hover {
    background-color: ${colors.purpleDark};
  }
`;

export default ComponentStyled;
