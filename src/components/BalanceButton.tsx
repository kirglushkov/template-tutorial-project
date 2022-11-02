import styled from "@emotion/styled";
import React from "react";
import { Icon20ChevronRight } from "@vkontakte/icons";

export const SECONDARY_COLOR = "#818c99";
export const PRIMARY_COLOR = "#000000";

const Title = styled.h1`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: ${PRIMARY_COLOR};
`;
const Info = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${SECONDARY_COLOR};
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 2px;
  flexgrow: 1;
  h1,
  h2 {
    font-style: normal;
    margin: 0;
    font-family: "Roboto";
    font-style: normal;
    text-align: center;
    letter-spacing: 0.2px;
  }
`;

const BalanceBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ChevronRight = styled(Icon20ChevronRight)`
  color: #99a2ad;
`;
const Balance = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height, or 128% */

  text-align: center;
  letter-spacing: 0.2px;
`;
type Props = {
  title: string;
  info?: string;
  balance?: number;
};

const Main = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const Root = styled(Main)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px 12px 12px;
  gap: 12px;
  height: 64px;

  background: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.07);
  /* Elevation 4 dp · New (Draft) */

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 4px rgba(0, 0, 0, 0.06);
  border-radius: 12px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const BalanceButton: React.FC<Props> = ({
  title = "Текст сверху",
  info = "Продолжительный текст снизу",
  balance = 420,
}) => {
  return (
    <Root>
      <TextBlock>
        <Title>{title}</Title>
        {info && <Info>{info}</Info>}
      </TextBlock>
      <BalanceBlock>
        {balance && <Balance>{balance}</Balance>}
        <ChevronRight />
      </BalanceBlock>
    </Root>
  );
};

export default BalanceButton;
