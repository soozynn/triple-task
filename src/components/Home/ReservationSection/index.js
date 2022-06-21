import React from "react";
import styled from "styled-components";

import phoneScreen02Src from "../../../images/phoneScreen02.png";
import phoneScreen03Src from "../../../images/phoneScreen03.png";
import phoneScreen04Src from "../../../images/phoneScreen04.png";
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

  &:nth-child(2) {
    background-color: rgb(250, 250, 250);
    z-index: 1;
    display: inline-block;
    position: relative;
  }

  @media (min-width: 1142px) {
    font-size: 17px;
    line-height: 30px;
    letter-spacing: -0.283333px;
    position: absolute;
    bottom: -52px;
    width: 100%;
  }

  @media (max-width: 1141px) {
    font-size: 14px;
    line-height: 24px;
    margin: 50px 0px 0px;
    letter-spacing: -0.5px;
  }
`;

export default function ReservationSection() {
  return (
    <ReservationBackground>
      <ReservationContainer>
        <CenterTitle
          title={
            <>
              모든 예약을
              <br />
              최저가로 한 번에!
            </>
          }
          subTitle={
            <>
              항공권부터 숙소, 투어·티켓까지 최저가로 예약.
              <br />
              트리플 전용 특가는 보너스.
            </>
          }
        />
        <PhonesContainer>
          <Phone src={phoneScreen02Src} />
          <Phone src={phoneScreen03Src} />
          <Phone src={phoneScreen04Src} />
        </PhonesContainer>
      </ReservationContainer>
    </ReservationBackground>
  );
}
