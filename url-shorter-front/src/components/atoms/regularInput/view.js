import React from "react";
import ContainerStyled from "./styled";

const RegularInput = ({
  label,
  type,
  value,
  error,
  handleOnChange,
  handleOnBlur,
}) => {
  return (
    <ContainerStyled>
      {label && <p className="label">{label}</p>}
      <p>Hola</p>
    </ContainerStyled>
  );
};

export default RegularInput;
