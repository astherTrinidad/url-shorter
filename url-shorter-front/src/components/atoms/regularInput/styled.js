import styled from "styled-components";
import colors from "../../../assets/colors";

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  width: 90%;
`;

export const ErrorContainer = styled.div`
  font-weight: normal;
  color: ${colors.red};
  font-size: 11px;
  margin: 0 auto;
  text-align: right;
  width: 90%;
`;

export const Input = styled.input`
  background: ${colors.white};
  border: ${(props) =>
    props.error && props.touched
      ? `2px solid ${colors.red}`
      : `2px solid ${colors.lightGrey}`};
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  transition: all 0.4s;
  width: 90%;

  :focus {
    border: 1px solid ${colors.white};
  }

  &::placeholder {
    font-size: 0.755em;
  }
`;

export const Label = styled.label`
  p {
    color: ${colors.black};
    font-family: "Poppins", sans-serif;
    font-weight: normal;
    font-size: 1rem;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    width: 100%;
  }
`;
