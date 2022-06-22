import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import CenterTitle from "../../shared/CenterTitle";
import Phone from "./Phone";

const ReservationBackground = styled.div`
  position: relative;
  overflow: hidden;
  background: center center / cover rgb(250, 250, 250);
`;

const ReservationContainer = styled.div`
  margin: 0px auto;
  position: relative;

  @media (min-width: 1142px) {
    width: 1040px;
    height: 1000px;
  }

  @media (max-width: 1141px) {
    max-width: 360px;
    height: 700px;
  }
`;

const PhonesContainer = styled.div`
  display: block;
  text-align: center;
  position: relative;
  z-index: 0;

  @media (min-width: 1142px) {
    font-size: 17px;
    line-height: 30px;
    letter-spacing: -0.283333px;
    position: absolute;
    bottom: ${(props) => (props.size ? "80px" : "-52px")}; // 수정 필요
    width: 100%;
  }

  @media (max-width: 1141px) {
    font-size: 14px;
    line-height: 24px;
    margin: 50px 0px 0px;
    letter-spacing: -0.5px;

    > * {
      &:nth-child(1) {
        width: 112px;
        height: 230px;
        border-radius: 16px;
        box-shadow: rgb(0 0 0 / 18%) 0px 4px 7px 0px,
          rgb(0 0 0 / 8%) 0px -2px 3px 0px inset;
        background-color: rgb(250, 250, 250);
        position: absolute;
        inset: 15px auto auto 30px;
      }

      &:nth-child(2) {
        width: 120px;
        height: 246px;
        border-radius: 18px;
        box-shadow: rgb(0 0 0 / 18%) 0px 4px 7px 0px,
          rgb(0 0 0 / 8%) 0px -2px 3px 0px inset;
        background-color: rgb(250, 250, 250);
        z-index: 1;
        display: inline-block;
        position: relative;
      }

      &:nth-child(3) {
        width: 112px;
        height: 230px;
        border-radius: 16px;
        box-shadow: rgb(0 0 0 / 18%) 0px 4px 7px 0px,
          rgb(0 0 0 / 8%) 0px -2px 3px 0px inset;
        background-color: rgb(250, 250, 250);
        position: absolute;
        inset: 15px 30px auto auto;
      }
    }
  }
`;

export default function FeatureSection(props) {
  const {
    title,
    subTitle,
    firstScreenSrc,
    secondScreenSrc,
    thirdScreenSrc,
    size,
  } = props;

  return (
    <ReservationBackground>
      <ReservationContainer>
        <CenterTitle title={title} subTitle={subTitle} />
        <PhonesContainer size={size}>
          <Phone src={firstScreenSrc} size={size} />
          <Phone src={secondScreenSrc} size={size} />
          <Phone src={thirdScreenSrc} size={size} />
        </PhonesContainer>
      </ReservationContainer>
    </ReservationBackground>
  );
}

FeatureSection.propTypes = {
  title: PropTypes.object.isRequired,
  subTitle: PropTypes.object.isRequired,
  firstScreenSrc: PropTypes.string.isRequired,
  secondScreenSrc: PropTypes.string.isRequired,
  thirdScreenSrc: PropTypes.string.isRequired,
  size: PropTypes.bool,
};
