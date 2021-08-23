import React from "react";
import url from "../../../config/url";

import { ContainerData, TextData, TextLink } from "./styled";
import { RegularButton } from "../../atoms";

const UrlData = ({ originText, shorterText, type, label, onClick }) => {
  return (
    <ContainerData>
      <TextData>{originText}</TextData>
      <TextLink href={originText} target="_blank" rel="redirect">
        {`${url.baseFront}${shorterText}`}
      </TextLink>
      <RegularButton type={type} label={label} onClick={onClick} size="sm" />
    </ContainerData>
  );
};

export default UrlData;
