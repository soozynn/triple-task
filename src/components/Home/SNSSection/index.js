import React from "react";
import styled from "styled-components";

import logoSrc from "../../../images/logo.png";
import facebookIcon from "../../../images/snsSection/facebook.png";
import instagramIcon from "../../../images/snsSection/instagram.png";
import blogIcon from "../../../images/snsSection/blog.png";
import brunchIcon from "../../../images/snsSection/brunch.png";
import InstallButton from "../../shared/InstallButton";
import Icon from "./Icon";

const SNSSectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  background: center center / cover rgba(35, 51, 50, 0.96);
`;

const SNSSectionContent = styled.div`
  margin: 0px auto;
  position: relative;

  @media (max-width: 1141px) {
    max-width: 360px;
    height: 560px;
  }

  @media (min-width: 1142px) {
    width: 1040px;
    height: 1000px;
  }
`;

const Title = styled.h2`
  margin: 0px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  color: rgba(255, 255, 255, 0.96);
  text-align: center;

  @media (min-width: 1142px) {
    padding-top: 406px;
    font-size: 29px;
  }

  @media (max-width: 1141px) {
    padding-top: 213px;
    font-size: 20px;
  }
`;

const BoldText = styled.strong`
  font-weight: bold;
`;

const SubTitle = styled.div`
  margin: 10px 0px 0px;
  font-weight: normal;
  font-style: normal;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.283333px;

  @media (min-width: 1142px) {
    font-size: 17px;
    line-height: 27px;
  }

  @media (max-width: 1141px) {
    font-size: 12.6px;
    line-height: 20px;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;

  @media (max-width: 1141px) {
    display: none;
  }
`;

const Logo = styled.img`
  position: absolute;

  @media (min-width: 1142px) {
    width: 77px;
    height: 25px;
    top: 83px;
    left: 50px;
  }

  @media (max-width: 1141px) {
    width: 56px;
    height: 18px;
    top: 42px;
    left: 14px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  position: absolute;

  * {
    margin-left: 5px;
  }

  @media (min-width: 1142px) {
    top: 80px;
    right: 50px;
  }

  @media (max-width: 1141px) {
    top: 42px;
    right: 14px;
  }
`;

export default function SNSSection() {
  return (
    <SNSSectionContainer>
      <SNSSectionContent>
        <Title>
          {"모바일 여행 가이드 "}
          <BoldText>트리플</BoldText>
          <SubTitle>
            어디로 떠사니사요?
            <br />
            {" 이제 당신의 여행에 언제든 함께 할게요."}
            <br />
            {" 지금 바로 트리플을 시작하세요."}
          </SubTitle>
        </Title>
        <ButtonWrapper>
          <InstallButton margintTop={"30px"} />
        </ButtonWrapper>
      </SNSSectionContent>

      <Logo src={logoSrc} />
      <IconsContainer>
        <Icon
          location={"https://www.facebook.com/triple.kr/"}
          src={facebookIcon}
        />
        <Icon
          location={"https://www.instagram.com/triple.kr/"}
          src={instagramIcon}
        />
        <Icon location={"https://blog.naver.com/triple-kr"} src={blogIcon} />
        <Icon
          location={"https://brunch.co.kr/@triple#articles"}
          src={brunchIcon}
        />
      </IconsContainer>
    </SNSSectionContainer>
  );
}
