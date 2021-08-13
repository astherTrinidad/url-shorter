import React, { useState, useEffect, useCallback } from "react";
import logo from "../../../assets/images/logo.svg";
import ComponentStyled from "./styled";
import { Container } from "@material-ui/core";
import { RegularButton, RegularInput } from "../../atoms";
import { validateUrl } from "../../../utils/index";
import { UrlData } from "../../molecules";
import url from "../../../config/url";

const Dashboard = () => {
  const [urlData, setUrlData] = useState({
    origin: "",
    shorter: "",
  });

  const [touched, setTouched] = useState({
    origin: false,
  });

  const [errors, setErrors] = useState({
    origin: "",
  });

  const validate = useCallback(() => {
    const newErrors = {
      origin: "",
    };

    if (!urlData.origin) newErrors.origin = "Campo obligatorio";
    else if (!validateUrl(urlData.origin))
      newErrors.origin = "Introduce una dirección de url correcta";

    setErrors(newErrors);
  }, [urlData]);

  useEffect(() => {
    validate();
  }, [urlData, validate]);

  const handleCreateUrl = async (event) => {
    event.preventDefault();
    try {
      var response = await apiShorterUrl(urlData);
      setUrlData(JSON.parse(response));
      apiRedirectUrl(urlData.shorter);
    } catch (event) {
      console.log("Error");
    }
  };

  const handleRedirect = async (event) => {
    event.preventDefault();
    try {
      var response = await apiRedirectUrl();
    } catch (event) {
      console.log("Error");
    }
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
              error={errors.origin}
            />
            <RegularButton
              type="submit"
              label="Generar URL"
              onClick={handleCreateUrl}
            />
          </form>
          <UrlData
            originText={urlData.origin}
            shorterText={`${url.base}/${urlData.shorter}`}
          />
        </main>
      </Container>
    </ComponentStyled>
  );
};

export default Dashboard;

async function apiShorterUrl(urlOrigin) {
  let response = await fetch(`${url.base}${url.shorterUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(urlOrigin),
  });

  let content = await response.text();
  return content;
}

async function apiRedirectUrl(keyShorter) {
  return fetch(`${url.base}/${keyShorter}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}
