import styled from "@emotion/styled";
import { Icon28SettingsOutline } from "@vkontakte/icons";
import React from "react";
import { APP_MAX_WIDTH } from "../../App";
import UnstyledIconButton from "./IconButton";

export const APP_BAR_HEIGHT = 56;

const Root = styled.header({
  height: APP_BAR_HEIGHT,
  position: "fixed",
  paddingLeft: 16,
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: 626,
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
