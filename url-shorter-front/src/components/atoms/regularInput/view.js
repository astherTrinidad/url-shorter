import React from "react";
import { Input, Label, Container, ErrorContainer } from "./styled";

const RegularInput = ({
  id,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  name,
  type,
  label,
  touched,
  error,
}) => (
  <Container>
    <Label htmlFor={label}>
      {label && <p>{label}:</p>}
      <Input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
        type={type}
        touched={touched}
        error={error}
      />
    </Label>
    {error && touched && <ErrorContainer>{error}</ErrorContainer>}
  </Container>
);

export default RegularInput;
