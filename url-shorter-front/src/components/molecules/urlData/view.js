import React from "react";
import { ContainerData, TextData, TextLink } from "./styled";

const UrlData = ({ originText, shorterText }) => {
  return (
    <ContainerData>
      <TextData>Url Original:</TextData>
      <TextLink>{originText} </TextLink>

      <TextData>Url Shorter:</TextData>
      <TextLink href={originText} target="_blank" rel="redirect">
        {shorterText}
      </TextLink>
    </ContainerData>
  );
};

export default UrlData;
