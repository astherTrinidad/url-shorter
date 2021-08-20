import React from "react";
import url from "../../../config/url";

import { ContainerData, TextData, TextLink } from "./styled";

const UrlData = ({ originText, shorterText }) => {
  return (
    <ContainerData>
      <TextData>{originText}</TextData>
      <TextLink href={originText} target="_blank" rel="redirect">
        {`${url.baseFront}${shorterText}`}
      </TextLink>
    </ContainerData>
  );
};

export default UrlData;
