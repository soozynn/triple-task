import React, { useState } from "react";
import styled from "styled-components";

import underArrowSrc from "../../images/footer/underArrow.png";
import downloadIconSrc from "../../images/footer/download.png";
import Button from "./Button";
import AboutLink from "./AboutLink";

const FooterBackground = styled.footer`
  display: block;
  background-color: rgb(250, 250, 250);
`;

const FooterContainer = styled.div`
  min-width: 280px;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 30px 40px;
  box-sizing: border-box;
  float: none;
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  float: none;
`;

const EntrepreneurText = styled.div`
  display: inline-block;
  color: var(--color-gray500) !important;
  font-weight: 700;
  font-size: 12px !important;
`;

const ArrowIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 3px;
  transform: translateY(2px);

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
  margin: 5px 0px 0px;
  box-sizing: border-box;
  float: none;
`;

const Information = styled.div`
  padding: 20px 0px 0px;
  box-sizing: border-box;
  overflow-wrap: break-word;
  float: none;
  white-space: pre-line;
  color: rgba(58, 58, 58, 0.5);
  font-weight: 500;
  font-size: 11px;
  line-height: 17px;
  letter-spacing: 0px;
`;

const WarningPhrase = styled.div`
  margin: 25px 0px 20px;
  box-sizing: border-box;
  overflow-wrap: break-word;
  float: none;
  color: rgba(58, 58, 58, 0.5);
  font-weight: 500;
  font-size: 11px;
  white-space: pre-line;
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
            ????????? ????????? ??????
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
              ?????????
            </Button>
            <Button
              location={
                "https://play.google.com/store/apps/details?id=com.titicacacorp.triple&pid=intro_web"
              }
              text={"????????? ???"}
              src={downloadIconSrc}
            />
          </ButtonsContainer>
        </FirstRow>

        {isClicked && (
          <InformationWrapper>
            <Information>
              ???????????? ????????? | ?????? ?????????, ?????????
              <br />
              ????????? ???????????? 581-87-00266
              <br />
              ??????????????? ???????????? 2017-????????????-0275
              <br />
              ????????? ????????? ????????? ???????????? 14?????? 16, 3???
              <br />
              ??????, ?????? ??? ?????????????? ?????? 1588-2539
              <br />
              help@triple-corp.com
            </Information>
          </InformationWrapper>
        )}

        <WarningPhrase>
          (???) ???????????? ???????????????????????? ??????????????? ???????????? ????????? ??????
          ???????????? ??? ???????????? ?????? ????????? ?????? ????????????.
        </WarningPhrase>

        <LinksContainer>
          <AboutLink location="https://triple.guide/pages/tos.html">
            ????????? ????????????
          </AboutLink>
          {"|"}
          <AboutLink location="https://triple.guide/pages/privacy-policy.html">
            ???????????? ????????????
          </AboutLink>
          {"|"}
          <AboutLink location="https://triple-corp.com/">?????? ??????</AboutLink>
          {"|"}
          <AboutLink location="https://triple.guide/cs-bridge/entry">
            ????????????
          </AboutLink>
        </LinksContainer>
      </FooterContainer>
    </FooterBackground>
  );
}
