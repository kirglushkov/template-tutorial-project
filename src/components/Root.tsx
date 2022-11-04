import styled from "@emotion/styled";
import React from "react";

type Props = {
  children: React.ReactNode;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
};

const StyledMain = styled.div<{
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alignItems || "center"};
  padding: 12px 8px 12px 12px;
  gap: 12px;
  height: auto;
  background: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 4px rgba(0, 0, 0, 0.06);
  border-radius: 12px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const Root: React.FC<Props> = ({ children, ...props }: Props) => {
  return <StyledMain {...props}>{children}</StyledMain>;
};

export default Root;
