import React from "react";
import ComponentStyled from "./styled";

const RegularButton = ({ type, label, onClick }) => {
  return (
    <ComponentStyled>
      <button type={type} onClick={onClick}>
        {label && <span>{label}</span>}
      </button>
    </ComponentStyled>
  );
};

export default RegularButton;
