import styled from "@emotion/styled";
import React from "react";

type Props = {};

const LIGHT_MUTED_COLOR = "#2c2d2e";

const Title = styled.h1`
  font-family: "VK Sans Display";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;
const SubTitle = styled.h2`
  /* R Text Regular */

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  /* or 133% */

  letter-spacing: 0.2px;

  /* Light/Text/Muted */

  color: ${LIGHT_MUTED_COLOR};
`;

const Paragraph = (props: Props) => {
  return (
    <div>
      <Title>Мощный заголовок</Title>
      <SubTitle>
        Продолжительный текст снизу, чтобы обосновать использование такого
        мощного заголовка
      </SubTitle>
    </div>
  );
};

export default Paragraph;
