import React, { useState } from "react";
import styled from "styled-components";

import underArrowSrc from "../../images/underArrow.png";
import downloadIconSrc from "../../images/download.png";
import Button from "./Button";
import AboutLink from "./AboutLink";

const FooterBackground = styled.footer`
  display: block;
  background-color: rgb(250, 250, 250);
`;

const FooterContainer = styled.div`
  box-sizing: border-box;
  float: none;
  min-width: 280px;
  max-width: 768px;
  padding: 30px 30px 40px;
  margin-left: auto;
  margin-right: auto;
`;

const FirstRow = styled.div`
  box-sizing: border-box;
  float: none;

  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

const EntrepreneurText = styled.div`
  display: inline-block;
  font-weight: 700;
  color: var(--color-gray500) !important;
  font-size: 12px !important;
`;

const ArrowIcon = styled.img`
  transform: translateY(2px);
  margin-left: 3px;
  width: 15px;
  height: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;

  > * {
    &:first-child {
      margin-right: 6px;
    }
  }
`;

const InformationWrapper = styled.div`
  box-sizing: border-box;
  float: none;
  margin: 5px 0px 0px;
`;

const Information = styled.div`
  box-sizing: border-box;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 0.5);
  float: none;
  font-weight: 500;
  white-space: pre-line;
  padding: 20px 0px 0px;
  font-size: 11px;
  line-height: 17px;
  letter-spacing: 0px;
`;

const WarningPhrase = styled.div`
  box-sizing: border-box;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 0.5);
  float: none;
  font-weight: 500;
  white-space: pre-line;
  margin: 25px 0px 20px;
  font-size: 11px;
  line-height: 17px;
  letter-spacing: 0px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  float: none;

  font-size: 11px;
  font-weight: bold;
  line-height: 20px;
  color: var(--color-gray);

  > * {
    &:first-child {
      margin-left: 0px;
    }
  }
`;

export default function Footer() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickButton = () => {
    setIsClicked(!isClicked);
  };

  return (
    <FooterBackground>
      <FooterContainer>
        <FirstRow>
          <EntrepreneurText>
            트리플 사업자 정보
            <ArrowIcon
              src={underArrowSrc}
              alt="arrow-icon"
              onClick={handleClickButton}
            />
          </EntrepreneurText>
          <ButtonsContainer>
            <Button
              location={"https://triple.guide/login?returnUrl=%2Fintro%2F"}
            >
              로그인
            </Button>
            <Button
              location={
                "https://play.google.com/store/apps/details?id=com.titicacacorp.triple&pid=intro_web"
              }
              text={"트리플 앱"}
              src={downloadIconSrc}
            />
          </ButtonsContainer>
        </FirstRow>

        {isClicked && (
          <InformationWrapper>
            <Information>
              주식회사 트리플 | 대표 김연정, 최휘영
              <br />
              사업자 등록번호 581-87-00266
              <br />
              통신판매업 신고번호 2017-성남분당-0275
              <br />
              경기도 성남시 분당구 판교역로 14번길 16, 3층
              <br />
              항공, 숙소 및 투어·티켓 문의 1588-2539
              <br />
              help@triple-corp.com
            </Information>
          </InformationWrapper>
        )}

        <WarningPhrase>
          (주) 트리플은 통신판매중개로서 통신판매의 당사자가 아니며 상품
          거래정보 및 거래등에 대해 책임을 지지 않습니다.
        </WarningPhrase>

        <LinksContainer>
          <AboutLink location="https://triple.guide/pages/tos.html">
            서비스 이용약관
          </AboutLink>
          {"|"}
          <AboutLink location="https://triple.guide/pages/privacy-policy.html">
            개인정보 처리방침
          </AboutLink>
          {"|"}
          <AboutLink location="https://triple-corp.com/">회사 소개</AboutLink>
          {"|"}
          <AboutLink location="https://triple.guide/cs-bridge/entry">
            고객센터
          </AboutLink>
        </LinksContainer>
      </FooterContainer>
    </FooterBackground>
  );
}
