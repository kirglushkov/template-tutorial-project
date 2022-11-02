import React, { ReactElement } from "react";
import styled from "@emotion/styled";

const Root = styled.button({
  borderRadius: "50%",
  padding: 12,
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  position: "relative",
  "&::before": {
    content: '""',
    borderRadius: "50%",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "currentcolor",
    transition: "opacity 180ms ease",
    opacity: 0,
    top: 0,
    left: 0,
  },
  "&:hover::before": {
    opacity: 0.06,
  },
  "&:active::before": {
    opacity: 0.12,
    transition: "opacity 0ms ease",
  },
});

type IconButtonProps = {
  children: ReactElement;
} & JSX.IntrinsicElements["button"];

const IconButton: React.FC<IconButtonProps> = ({ children, ...props }) => {
  return <Root {...props}>{children}</Root>;
};

export default IconButton;
