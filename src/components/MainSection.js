import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import mainBackgroundSrc from "../images/mainBackground.png";
import phoneScreenSrc from "../images/phoneScreen01.png";

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

const MarketLinksContainer = styled(Link)`
  display: none;
  margin-top: 76px;

  @media (min-width: 1142px) {
    display: block;
  }
`;

const MarketLinksButton = styled.button`
  box-sizing: border-box;
  float: none;

  position: relative;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgb(255, 255, 255);
  font-weight: bold;
  transition: all 200ms ease-in-out 0s;
  width: 180px;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  color: rgb(255, 255, 255);

  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    cursor: pointer;
  }
`;

const PhoneContainer = styled.div``;

const PhoneFrameWrapper = styled.div`
  display: block;
`;

const PhoneFrame = styled.div`
  background-color: rgb(250, 250, 250);
  position: absolute;
  /* inset: 318px auto -96px 50%; */
  transform: translateX(-50%);

  inset: 229px 0px auto auto;
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

  @media (min-width: 1142px) {
    width: 330px;
    height: 680px;
    border-radius: 48px;
    box-shadow: rgb(0 0 0 / 18%) 0px 13px 24px 0px,
      rgb(0 0 0 / 8%) 0px -6px 9px 0px inset;
    inset: 229px 0px auto auto;
  }
`;

const PhoneScreen = styled.div`
  background-image: url(${phoneScreenSrc});
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

  @media (min-width: 1142px) {
    width: 300px;
    height: 650px;
    top: 15px;
    left: 15px;
    border-radius: 33px;
    background-size: 300px 650px;
  }
`;

export default function MainSection(props) {
  return (
    <MainBackground>
      <MainSectionContainer>
        <TitleContainer>
          <Title>
            여행의 모든 것<br />
            트리플로 한 번에
          </Title>
          <SubTitle>예약부터 일정까지 앱 하나로 간편하게 준비하세요.</SubTitle>
          <MarketLinksContainer
            to={
              "https://play.google.com/store/apps/details?id=com.titicacacorp.triple&pid=intro_web"
            }
          >
            <MarketLinksButton>앱 설치하기</MarketLinksButton>
          </MarketLinksContainer>
        </TitleContainer>
        <PhoneContainer>
          <PhoneFrameWrapper>
            <PhoneFrame>
              <PhoneScreen />
            </PhoneFrame>
          </PhoneFrameWrapper>
        </PhoneContainer>
      </MainSectionContainer>
    </MainBackground>
  );
}
