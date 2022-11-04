import React from "react";
import Root from "../Root";
import Card from "./Card";

type Props = {};

const MainProps = {
  height: 130,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const Main = ({
  props,
  children,
}: {
  props: typeof MainProps;
  children: React.ReactNode;
}) => {
  return <Root {...props}>{children}</Root>;
};

export const COLOR_MAP = {
  blue: "#0077FF",
  red: "#FF3347",
  green: "#4BB34B",
  yellow: "#FFA000",
};

const ArrayOfCards = [
  {
    id: 1,
    name: "Dit is een kaart",
    type: "App",
    color: COLOR_MAP.blue,
  },
  {
    id: 2,
    name: "Dota 2",
    type: "Game",
    color: COLOR_MAP.green,
  },
  {
    id: 3,
    name: "ENXT JS",
    type: "Framework",
    color: COLOR_MAP.red,
  },
  {
    id: 4,
    name: "VITE",
    type: "App",
    color: COLOR_MAP.yellow,
  },
];

const Cards = (props: Props) => {
  return (
    <Main props={MainProps}>
      {ArrayOfCards.map((card) => (
        <Card {...card} />
      ))}
    </Main>
  );
};

export default Cards;
