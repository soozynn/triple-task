import React from "react";
import styled from "styled-components";

const CenterTitleContainer = styled.h2`
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: -1px;
  color: rgb(58, 58, 58);
  width: 100%;
  text-align: center;
  margin: 0px;

  @media (min-width: 1142px) {
    position: absolute;
    font-size: 52px;
    line-height: 68px;
    top: 150px;
  }

  @media (max-width: 1141px) {
    margin: 0px;
    padding-top: 110px;
    font-size: 28px;
    line-height: 34px;
  }
`;

const CenterSubTitle = styled.div`
  font-weight: normal;
  font-style: normal;
  color: rgb(58, 58, 58);
  text-align: center;
  margin: 0px;

  @media (min-width: 1142px) {
    font-size: 17px;
    line-height: 30px;
    letter-spacing: -0.283333px;
    position: absolute;
    top: 306px;
    width: 100%;
  }

  @media (max-width: 1141px) {
    font-size: 16px;
    line-height: 24px;
    margin: 15px 0px 0px;
    letter-spacing: -0.5px;
  }
`;

export default function CenterTitle(props) {
  return (
    <>
      <CenterTitleContainer>
        모든 예약을
        <br />
        최저가로 한 번에!
      </CenterTitleContainer>
      <CenterSubTitle>
        항공권부터 숙소, 투어·티켓까지 최저가로 예약.
        <br /> 트리플 전용 특가는 보너스.
      </CenterSubTitle>
    </>
  );
}
