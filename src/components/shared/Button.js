import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  box-sizing: border-box;
  height: 32px;
  padding: ${(props) => (props.padding ? props.padding : "9px 12px")};
  font-size: 11px;
  font-weight: bold;
  line-height: 13px;
  color: var(--color-gray600);
  text-align: center;
  border: 1px solid var(--color-gray200);
  border-radius: 4px;
  background-color: rgb(250, 250, 250);
  cursor: pointer;
`;

export default function Button({ children }) {
  return <ButtonContainer>{children}</ButtonContainer>;
}
