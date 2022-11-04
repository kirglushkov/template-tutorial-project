import styled from "@emotion/styled";
import React from "react";

type Props = {
  id: number;
  name: string;
  type: string;
  color: string;
};

export const CARD_HEIGHT = 110;
export const CARD_WIDTH = 90;
export const CARD_PADDING = 12;

const Root = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${CARD_PADDING}px;
  color: #ffffff;
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;

  background: ${(props) => props.color || "grey"};
  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
`;

const Card = (props: Props) => {
  return (
    <Root color={props.color}>
      <div>{props.name}</div>
      <div>{props.type}</div>
      <div>{props.id}</div>
    </Root>
  );
};

export default Card;
