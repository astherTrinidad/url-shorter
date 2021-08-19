import styled from "styled-components";
import colors from "../../../assets/colors";

const ComponentStyled = styled.div`
  .page-container {
    text-align: center;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.lightGreen};
  }

  img {
    width: 300px;
    height: auto;
  }
`;

export default ComponentStyled;
