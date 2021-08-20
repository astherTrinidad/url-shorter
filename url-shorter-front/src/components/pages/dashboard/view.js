import React, { useState, useEffect, useCallback } from "react";
import { Container } from "@material-ui/core";

import * as API from "../../../api/index";
import { validateUrl } from "../../../utils/index";
import ComponentStyled from "./styled";
import { RegularButton, RegularInput } from "../../atoms";
import { UrlData } from "../../molecules";
import logo from "../../../assets/images/logo.svg";

const Dashboard = () => {
  const [isNotUndefined, setIsNotUndefined] = useState(false);

  const [urlData, setUrlData] = useState([
    {
      origin: "",
      shorter: "",
    },
  ]);

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
          console.log(urlData);
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
          {!isNotUndefined ? (
            <></>
          ) : (
            <UrlData
              originText={urlData.origin}
              shorterText={urlData.shorter}
            />
          )}
        </main>
      </Container>
    </ComponentStyled>
  );
};

export default Dashboard;
