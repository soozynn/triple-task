import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonWrapper = styled(Link)`
  box-sizing: border-box;
  height: 32px;
  padding: 9px 12px;
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

const InstallIcon = styled.img`
  width: 16px;
  margin-left: 6px;
  vertical-align: middle;
`;

export default function Button(props) {
  const { children, text, src, location } = props;

  return (
    <ButtonWrapper to={location}>
      {children}
      <span>{text}</span>
      {src && <InstallIcon src={src} alt="app-download" />}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  text: PropTypes.string,
  location: PropTypes.string.isRequired,
};
