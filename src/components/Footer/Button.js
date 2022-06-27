import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonWrapper = styled.button`
  height: 32px;
  padding: 9px 12px;
  box-sizing: border-box;
  border: 1px solid var(--color-gray200);
  border-radius: 4px;
  background-color: rgb(250, 250, 250);
  font-size: 11px;
  font-weight: bold;
  line-height: 13px;
  color: var(--color-gray600);
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const InstallIcon = styled.img`
  width: 16px;
  margin-left: 6px;
  vertical-align: middle;
`;

export default function Button(props) {
  const { children, text, src, location } = props;

  const handleClickButton = () => {
    window.location.href = location;
  };

  return (
    <ButtonWrapper onClick={handleClickButton}>
      {children}
      <span>{text}</span>
      {src && <InstallIcon src={src} alt="app-download" />}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string,
  location: PropTypes.string.isRequired,
};
