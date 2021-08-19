import React from "react";
import { Container } from "@material-ui/core";

import ComponentStyled from "./styled";

const NotFound = () => {
  return (
    <ComponentStyled>
      <Container class="page-container">
        <h1>Page Not Found</h1>
      </Container>
    </ComponentStyled>
  );
};

export default NotFound;
