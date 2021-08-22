import React from "react";
import ComponentStyled from "./styled";

const RegularButton = ({ type, label, onClick, size }) => {
  return (
    <ComponentStyled>
      <button type={type} onClick={onClick} className={size}>
        {label && <span>{label}</span>}
      </button>
    </ComponentStyled>
  );
};

export default RegularButton;
