import React, { useEffect } from "react";

import url from "../../../config/url";

const Redirect = () => {
  useEffect(() => {
    async function fetchUrl() {
      try {
        const pathName = window.location.pathname.slice(1);
        const response = await apiRedirectUrl(pathName);
        console.log(response);
        if (response.message === "not found") {
          window.location = "https://google.com";
        } else {
          window.location = response;
        }
      } catch {
        console.log("Error de url");
      }
    }
    fetchUrl();
  });
  return <> </>;
};

export default Redirect;

async function apiRedirectUrl(keyShorter) {
  return fetch(`${url.base}/${keyShorter}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}
