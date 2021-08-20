import styled from "styled-components";
import colors from "../../../assets/colors";

const ContainerData = styled.div`
  border-bottom: 1px solid ${colors.lightGreen};
  padding: 1rem;
  width: 85%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const TextData = styled.p`
  color: ${colors.black};
  font-size: 1.125rem;
  padding: 0;
`;

const TextLink = styled.a`
  /* color: ${colors.blue}; */
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: normal;
  line-height: 0;
`;

export { ContainerData, TextData, TextLink };
