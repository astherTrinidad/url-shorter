import React from "react";
import { Container } from "@material-ui/core";

import ComponentStyled from "./styled";
import illustrationError from "../../../assets/images/404.svg";

const NotFound = () => {
  return (
    <ComponentStyled>
      <Container className="page-container" maxWidth="lg">
        <h1>Oops! Página no encontrada</h1>
        <img src={illustrationError} alt="Página no encontrada" />
      </Container>
    </ComponentStyled>
  );
};

export default NotFound;
