import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PhoneFrame = styled.div`
  background-color: rgb(250, 250, 250);
  display: inline-block;
  position: relative;

  @media (min-width: 1142px) {
    /* margin-right: 20px; */
    width: ${(props) => (props.size ? "221px" : "290px")};
    height: ${(props) => (props.size ? "456px" : "598px")};
    border-radius: ${(props) => (props.size ? "32px" : "42px")};
    box-shadow: ${(props) =>
      props.size
        ? "rgb(0 0 0 / 18%) 0px 4px 7px 0px, rgb(0 0 0 / 8%) 0px -2px 3px 0px inset"
        : "rgb(0 0 0 / 18%) 0px 9px 16px 0px, rgb(0 0 0 / 8%) 0px -4px 6px 0px inset"};
  } // 큰 화면에서 폰 그림자 수정 필요

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
    width: ${(props) => (props.size ? "202px" : "262px")};
    height: ${(props) => (props.size ? "437px" : "570px")};

    top: ${(props) => (props.size ? "9px" : "14px")};
    left: ${(props) => (props.size ? "10px" : "14px")};
    border-radius: ${(props) => (props.size ? "32px" : "20px")};
    background-size: ${(props) => (props.size ? "201px 436px" : "262px 570px")};
  }

  @media (max-width: 1141px) {
    width: 102px;
    height: 220px;
    top: 5px;
    left: 5px;
    border-radius: 16px;
    background-size: 102px 220px;

    /* > * { 중앙 스크린 정렬 수정 필요
      &:nth-child(2) {
        width: 108px;
        height: 234px;
        top: 6px;
        left: 6px;
        border-radius: 18px;
        background-size: 108px 234px;
      }
    } */
  }
`;

export default function Phone(props) {
  const { src, size } = props;

  return (
    <PhoneFrame size={size}>
      <PhoneScreen src={src} size={size} />
    </PhoneFrame>
  );
}

Phone.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.bool,
};
