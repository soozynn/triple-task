import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PhoneFrame = styled.div`
  background-color: rgb(250, 250, 250);
  display: inline-block;
  position: relative;

  @media (min-width: 1142px) {
    width: 290px;
    height: 598px;
    border-radius: 42px;
    box-shadow: rgb(0 0 0 / 18%) 0px 9px 17px 0px,
      rgb(0 0 0 / 8%) 0px -4px 6px 0px inset;
    margin-right: 20px; // 수정 필요
  }

  @media (max-width: 1141px) {
    width: 112px;
    height: 230px;
    border-radius: 16px;
    box-shadow: rgb(0 0 0 / 18%) 0px 4px 7px 0px,
      rgb(0 0 0 / 8%) 0px -2px 3px 0px inset;
  }
`;

const PhoneScreen = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  position: absolute;

  @media (min-width: 1142px) {
    width: 262px;
    height: 570px;
    top: 14px;
    left: 14px;
    border-radius: 20px;
    background-size: 262px 570px;
  }

  @media (max-width: 1141px) {
    width: 102px;
    height: 220px;
    top: 5px;
    left: 5px;
    border-radius: 16px;
    background-size: 102px 220px;
  }
`;

export default function Phone({ src }) {
  return (
    <PhoneFrame>
      <PhoneScreen src={src}></PhoneScreen>
    </PhoneFrame>
  );
}

Phone.propTypes = {
  src: PropTypes.string.isRequired,
};
