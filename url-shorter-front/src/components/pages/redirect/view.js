import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import url from "../../../config/url";
import appRoutes from "../../../config/appRoutes";
import NotFound from "../../pages/notFound";

const Redirect = () => {
  const [endPointResponse, setEndPointResponse] = useState();
  const history = useHistory();

  useEffect(() => {
    async function fetchUrl() {
      try {
        const pathName = window.location.pathname.slice(1);
        const response = await apiRedirectUrl(pathName);
        console.log(response);

        if (response.message === "not found") {
          setEndPointResponse(response.message);
          history.push(appRoutes.notFound);
        } else {
          setEndPointResponse(response);
          window.location = response;
        }
      } catch (error) {
        history.push = appRoutes.dashboard;
      }
    }
    fetchUrl();
  }, []);
  return <>{endPointResponse !== "not found" ? <></> : <NotFound />}</>;
};

export default Redirect;

async function apiRedirectUrl(keyShorter) {
  return fetch(`${url.baseBack}/${keyShorter}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}
