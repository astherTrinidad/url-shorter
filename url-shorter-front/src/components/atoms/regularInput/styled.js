import styled from "styled-components";
import colors from "../../../assets/colors";

export const Input = styled.input`
  background: ${colors.white};
  border: ${(props) =>
    props.error && props.touched
      ? `2px solid ${colors.red}`
      : `2px solid ${colors.lightGrey}`};
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  margin-top: 4px;
  padding: 5px 12px;
  transition: all 0.4s;
  width: 100%;

  :focus {
    border: 1px solid ${colors.white};
  }

  &::placeholder {
    font-size: 0.755em;
  }
`;

export const Label = styled.label`
  color: ${colors.black};
  width: 100%;

  p {
    font-family: "Poppins", sans-serif;
    font-weight: normal;
    font-size: 16px;
    text-align: left;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export const ErrorContainer = styled.div`
  font-weight: normal;
  color: ${colors.red};
  font-size: 11px;
  text-align: right;
  padding: 5px 5px 0;
`;
