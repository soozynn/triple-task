import React from "react";
import styled from "styled-components";

import mainBackgroundSrc from "../../../images/mainBackground.png";
import phoneScreen01Src from "../../../images/phoneScreen01.png";
import InstallButton from "../../shared/InstallButton";

const MainBackground = styled.div`
  position: relative;
  background-image: url(${mainBackgroundSrc});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const MainSectionContainer = styled.div`
  margin: 0px auto;
  position: relative;

  @media (max-width: 1141px) {
    max-width: 360px;
    height: 700px;
  }

  @media (min-width: 1142px) {
    width: 1040px;
    height: 860px;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  width: 100%;

  @media (max-width: 1141px) {
    top: 120px;
    text-align: center;
  }

  @media (min-width: 1142px) {
    top: 220px;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  margin: 0px 0px 0px -4px;
  color: rgb(255, 255, 255);
  transition-duration: 600ms;
  transition-delay: 0ms;

  @media (max-width: 1141px) {
    font-size: 48px;
    line-height: 1.13;
    letter-spacing: -1.5px;
  }

  @media (min-width: 1142px) {
    font-size: 90px;
    line-height: 1.1;
    letter-spacing: -3px;
  }
`;

const SubTitle = styled.p`
  letter-spacing: 0px;
  color: rgb(255, 255, 255);
  font-weight: 500;
  transition-duration: 900ms;
  transition-delay: 0ms;

  @media (max-width: 1141px) {
    font-size: 16px;
    line-height: 1.71;
    text-align: center;
    white-space: pre;
  }

  @media (min-width: 1142px) {
    margin: 18px 0px 0px 1px;
    font-size: 17px;
    line-height: 2;
  }
`;

const PhoneContainer = styled.div`
  transition-duration: 700ms;
  transition-delay: 0ms;
`;

const BigPhoneFrameWrapper = styled.div`
  display: block;
`;

const BigPhoneFrame = styled.div`
  background-color: rgb(250, 250, 250);
  position: absolute;
  /* inset: 318px auto -96px 50%; */
  /* transform: translateX(-50%);
  inset: 229px 0px auto auto; */

  ::after {
    content: "";
    position: absolute;
    top: 0px;
    background-color: rgb(250, 250, 250);
  }

  /* @media (max-width: 1141px) {
    width: 231px;
    height: 476px;
    border-radius: 34px;
    box-shadow: rgb(0 0 0 / 18%) 0px 9px 17px 0px,
      rgb(0 0 0 / 8%) 0px -4px 6px 0px inset;
    inset: 318px auto -96px 50%;

    ::after {
      width: 113px;
      height: 27px;
      left: 59px;
      border-radius: 13px;
    }
  } */

  @media (min-width: 1142px) {
    width: 330px;
    height: 680px;
    border-radius: 48px;
    box-shadow: rgb(0 0 0 / 18%) 0px 13px 24px 0px,
      rgb(0 0 0 / 8%) 0px -6px 9px 0px inset;
    inset: 229px 0px auto auto;

    ::after {
      width: 162px;
      height: 38px;
      left: 84px;
      border-radius: 18px;
    }
  }
`;

const BigPhoneScreen = styled.div`
  background-image: url(${phoneScreen01Src});
  background-repeat: no-repeat;
  position: absolute;

  /* @media (max-width: 1141px) {
    width: 209px;
    height: 454px;
    top: 11px;
    left: 11px;
    border-radius: 23px;
    background-size: 209px 454px;
  } */

  @media (min-width: 1142px) {
    width: 300px;
    height: 650px;
    top: 15px;
    left: 15px;
    border-radius: 33px;
    background-size: 300px 650px;
  }
`;

const SmallPhoneFrameWrapper = styled.div`
  display: block;

  @media (min-width: 1142px) {
    display: none;
  }
`;

const SmallPhoneFrame = styled.div`
  background-color: rgb(250, 250, 250);
  position: absolute;
  /* inset: 318px auto -96px 50%; */
  /* transform: translateX(-50%);
  inset: 229px 0px auto auto; */

  ::after {
    content: "";
    position: absolute;
    top: 0px;
    background-color: rgb(250, 250, 250);
  }

  @media (max-width: 1141px) {
    width: 231px;
    height: 476px;
    border-radius: 34px;
    box-shadow: rgb(0 0 0 / 18%) 0px 9px 17px 0px,
      rgb(0 0 0 / 8%) 0px -4px 6px 0px inset;
    inset: 318px auto -96px 50%;

    ::after {
      width: 113px;
      height: 27px;
      left: 59px;
      border-radius: 13px;
    }
  }
  /*
  @media (min-width: 1142px) {
    width: 330px;
    height: 680px;
    border-radius: 48px;
    box-shadow: rgb(0 0 0 / 18%) 0px 13px 24px 0px,
      rgb(0 0 0 / 8%) 0px -6px 9px 0px inset;
    inset: 229px 0px auto auto;

    ::after {
      width: 162px;
      height: 38px;
      left: 84px;
      border-radius: 18px;
    }
  } */
`;

const SmallPhoneScreen = styled.div`
  background-image: url(${phoneScreen01Src});
  background-repeat: no-repeat;
  position: absolute;

  @media (max-width: 1141px) {
    width: 209px;
    height: 454px;
    top: 11px;
    left: 11px;
    border-radius: 23px;
    background-size: 209px 454px;
  }
  /*
  @media (min-width: 1142px) {
    width: 300px;
    height: 650px;
    top: 15px;
    left: 15px;
    border-radius: 33px;
    background-size: 300px 650px;
  } */
`;

export default function MainSection() {
  return (
    <MainBackground>
      <MainSectionContainer>
        <TitleContainer>
          <Title>
            여행의 모든 것<br />
            트리플로 한 번에
          </Title>
          <SubTitle>예약부터 일정까지 앱 하나로 간편하게 준비하세요.</SubTitle>
          <InstallButton />
        </TitleContainer>
        <PhoneContainer>
          <BigPhoneFrameWrapper>
            <BigPhoneFrame>
              <BigPhoneScreen />
            </BigPhoneFrame>
          </BigPhoneFrameWrapper>
          <SmallPhoneFrameWrapper>
            <SmallPhoneFrame>
              <SmallPhoneScreen />
            </SmallPhoneFrame>
          </SmallPhoneFrameWrapper>
        </PhoneContainer>
      </MainSectionContainer>
    </MainBackground>
  );
}
