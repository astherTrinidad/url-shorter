import React, { useState, useEffect, useCallback } from "react";
import logo from "../../../assets/images/logo.svg";
import ComponentStyled from "./styled";
import { Container } from "@material-ui/core";
import { RegularButton, RegularInput } from "../../atoms";

const Dashboard = () => {
  const [urlData, setUrlData] = useState({
    origin: "",
    shorter: "",
  });

  const [touched, setTouched] = useState({
    origin: false,
  });

  const handleCreateUrl = () => {
    alert(urlData.origin);
  };

  const handleChange = (event) => {
    setUrlData({
      ...urlData,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (event) => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  };

  return (
    <ComponentStyled>
      <Container className="page-container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <form className="App-form">
            <RegularInput
              label="Introduce la dirección que deseas acortar"
              placeholder="Origin"
              name="origin"
              type="text"
              value={urlData.origin}
              touched={touched.origin}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <RegularButton
              type="submit"
              label="Generar URL"
              onClick={handleCreateUrl}
            />
          </form>
          <p>
            <code>Url Original: {urlData.origin}</code>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            url acortada
          </a>
        </main>
      </Container>
    </ComponentStyled>
  );
};

export default Dashboard;
