import styled from "styled-components";
import colors from "../../../assets/colors";

const ContainerData = styled.div`
  border-bottom: 1px solid ${colors.lightGreen};
  padding: 1rem;
  width: 80%;
  margin: 0 auto;
`;

const TextData = styled.p`
  font-size: 1rem;
  color: ${colors.black};
  font-weight: bold;
`;

const TextLink = styled.a`
  color: ${colors.blue};
  font-size: 1.25rem;
  font-weight: normal;
  cursor: pointer;
`;

export { ContainerData, TextData, TextLink };
