import styled from "@emotion/styled";
import { Icon28SettingsOutline } from "@vkontakte/icons";
import React from "react";
import { APP_MAX_WIDTH } from "../../App";
import UnstyledIconButton from "./IconButton";

export const APP_BAR_HEIGHT = 56;
const APP_BAR_WIDTH = 626;
const PADDING = 16;

const Root = styled.header({
  height: APP_BAR_HEIGHT,
  position: "fixed",
  paddingLeft: PADDING,
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: `calc(100% - ${PADDING}px)`,
  maxWidth: APP_BAR_WIDTH,
});

const Title = styled.h3({
  margin: 0,
  fontSize: 20,
  lineHeight: "25px",
  fontWeight: 600,
  fontFamily: '"VK Sans Display"',
});

const IconsRow = styled.div({
  display: "flex",
  flexDirection: "row",
});

const IconButton = styled(UnstyledIconButton)({
  color: "#2688EB",
});

const AppBar: React.FC = () => {
  return (
    <Root>
      <Title>Приложение</Title>
      <IconsRow>
        <IconButton>
          <Icon28SettingsOutline />
        </IconButton>
      </IconsRow>
    </Root>
  );
};

export default AppBar;
