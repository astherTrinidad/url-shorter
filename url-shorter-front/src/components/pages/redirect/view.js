import React, { useState, useEffect } from "react";

import * as API from "../../../api/index";
import NotFound from "../../pages/notFound";

const Redirect = () => {
  const [isNotFound, setIsNotFound] = useState(false);

  const fetchUrl = async () => {
    try {
      const pathName = window.location.pathname.slice(1);
      const response = await API.redirectUrl(pathName);

      if (response.status === 200) {
        window.location = response.text;
      } else {
        setIsNotFound(true);
      }
    } catch (error) {
      setIsNotFound(true);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);
  return <>{!isNotFound ? <></> : <NotFound />}</>;
};

export default Redirect;
