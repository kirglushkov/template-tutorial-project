import React from "react";
import styled from "@emotion/styled";
import { Global, Interpolation, Theme } from "@emotion/react";
import AppBar from "./components/AppBar/AppBar";
import BalanceButton from "./components/BalanceButton";
import HorizontalScrollList from "./components/HorizontalScrollList";
import Paragraph from "./components/Paragraph";
import Cards from "./components/CardsList/Cards";
import MasonryGrid from "./components/MasonryGrid";

export const APP_MAX_WIDTH = 640;

const Root = styled.main({
  display: "flex",
  flexDirection: "column",
  maxWidth: APP_MAX_WIDTH,
  margin: "0 auto",
  position: "relative",
});

const Main = styled.div({
  display: "flex",
  flexDirection: "column",
  padding: "16px 12px",
  gap: 16,
  zIndex: 1,
  borderRadius: 16,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  backgroundColor: "#FFFFFF",
  boxShadow:
    "0px 0px 2px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.08)",
});

const App: React.FC = () => {
  const globalStyles: Interpolation<Theme> = {
    body: {
      backgroundColor: "#EBEDF0",
    },
  };

  return (
    <Root>
      <Global styles={globalStyles} />
      <AppBar />
      <Main>
        <BalanceButton
          title={"Это титул"}
          balance={399}
          info={"Большая инфа на кнопке"}
        />
        <HorizontalScrollList />
        <Paragraph />
        <Cards />
        <MasonryGrid />
      </Main>
    </Root>
  );
};

export default App;
