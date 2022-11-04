import React, { ReactElement } from "react";
import styled from "@emotion/styled";

const Root = styled.button({
  borderRadius: "50%",
  padding: 12,
  border: "none",
  backgroundColor: "transparent",
  transition: "background-color 180ms ease",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.06)",
  },
  "&:active": {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    transition: "background-color 0ms ease",
  },
});

type IconButtonProps = {
  children: ReactElement;
} & JSX.IntrinsicElements["button"];

const IconButton: React.FC<IconButtonProps> = ({ children, ...props }) => {
  return <Root {...props}>{children}</Root>;
};

export default IconButton;
