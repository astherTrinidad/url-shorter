import React, { useState, useEffect, useCallback } from "react";
import { Container } from "@material-ui/core";

import * as API from "../../../api/index";
import url from "../../../config/url";
import { validateUrl } from "../../../utils/index";
import ComponentStyled from "./styled";
import { RegularButton, RegularInput } from "../../atoms";
import { UrlData } from "../../molecules";
import logo from "../../../assets/images/logo.svg";

const Dashboard = () => {
  const [isNotUndefined, setIsNotUndefined] = useState(false);
  const [copied, setCopied] = useState(false);

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
    if (!errors.origin) {
      try {
        var response = await API.shorterUrl(urlData);

        if (response.text !== "undefined") {
          setUrlData(response.text);
          setIsNotUndefined(true);
        }
      } catch (event) {
        alert("ERROR SERVIDOR");
      }
    } else {
      alert("URL NO VÁLIDA");
    }
  };

  const handleChange = (event) => {
    setIsNotUndefined(false);

    setUrlData({
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (event) => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  };

  const handleCopyUrl = () => {
    const urlShorterText = document.createElement("input");
    console.log("soy shorter" + urlShorterText);
    urlShorterText.value = `${url.baseFront}${urlData.shorter}`;
    document.body.appendChild(urlShorterText);
    urlShorterText.select();
    document.execCommand("copy");
    document.body.removeChild(urlShorterText);
    setCopied(true);
  };

  return (
    <ComponentStyled>
      <Container className="page-container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="url shorter logo" />
        </header>
        <main>
          <form className="App-form">
            <RegularInput
              label="Introduce la dirección que deseas acortar"
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
              size="md"
            />
          </form>
          {!isNotUndefined ? (
            <></>
          ) : (
            <>
              <UrlData
                originText={urlData.origin}
                shorterText={urlData.shorter}
                type="button"
                label={!copied ? "Copiar Link" : "Copiado!"}
                onClick={handleCopyUrl}
              />
            </>
          )}
        </main>
      </Container>
    </ComponentStyled>
  );
};

export default Dashboard;
