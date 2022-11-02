import styled from "@emotion/styled";
import { Icon28SettingsOutline } from "@vkontakte/icons";
import React from "react";
import UnstyledIconButton from "./IconButton";

const APP_BAR_HEIGHT = 56;

const Root = styled.header({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: APP_BAR_HEIGHT,
  padding: "0 16px",
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
