import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MarketLinksContainer = styled.div`
  display: none;
  margin-top: ${(props) => props.margintTop || "76px"};

  @media (min-width: 1142px) {
    display: block;
  }
`;

const MarketLinksButton = styled.button`
  width: 180px;
  height: 50px;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgb(255, 255, 255);
  border-radius: 25px;
  float: none;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  line-height: 50px;
  color: rgb(255, 255, 255);
  transition: all 200ms ease-in-out 0s;

  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    cursor: pointer;
  }
`;

export default function Button({ margintTop }) {
  const handleClickButton = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.titicacacorp.triple&pid=intro_web";
  };

  return (
    <MarketLinksContainer margintTop={margintTop}>
      <MarketLinksButton onClick={handleClickButton}>
        앱 설치하기
      </MarketLinksButton>
    </MarketLinksContainer>
  );
}

Button.propTypes = {
  margintTop: PropTypes.string,
};
