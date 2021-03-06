import React, { useState } from "react";
import styled from "styled-components";

import badgeTripleSrc from "../../../images/awardSection/badgeTriple.png";
import badgePlayStoreSrc from "../../../images/awardSection/badgePlayStore.png";
import badgeAppleSrc from "../../../images/awardSection/badgeApple.png";
import useFadeIn from "../../../hooks/useFadeIn";
import CountUpAnimation from "../../CountUpAnimation";
import AwardItem from "./AwardItem";
import AwardTitle from "./AwardTitle";

const AwardSectionBackground = styled.div`
  position: relative;
  overflow: hidden;
  background-image: inherit;
  background-repeat: inherit;
  background-attachment: inherit;
  background-origin: inherit;
  background-clip: inherit;
  background-color: inherit;
  background-size: cover;
  background-position: center center;
`;

const AwardSectionContainer = styled.div`
  position: relative;
  margin: 0px auto;

  @media (min-width: 1142px) {
    width: 1040px;
    height: auto;
  }

  @media (max-width: 1141px) {
    max-width: 360px;
    height: auto;
  }
`;

const ContentLogo = styled.div`
  box-sizing: border-box;
  background-image: url(${badgeTripleSrc});
  background-repeat: no-repeat;
  text-align: center;
  color: var(--color-gray700);
  transform: translateY("10px");

  @media (min-width: 1142px) {
    position: absolute;
    top: 150px;
    width: 400px;
    height: 338px;
    padding-top: 280px;
    background-size: 400px 338px;
    font-size: 15px;
  }

  @media (max-width: 1141px) {
    width: 200px;
    height: 169px;
    margin: 80px auto 20px;
    padding-top: 137px;
    background-size: 200px 169px;
    font-size: 10px;
  }
`;

const ContentArticles = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
  color: rgb(58, 58, 58);
  transform: translateY("10px");

  @media (min-width: 1142px) {
    margin-left: 623px;
    padding-top: 150px;
  }

  @media (max-width: 1141px) {
    text-align: center;
  }
`;

const AwardItemsContainer = styled.div`
  white-space: nowrap;
  transform: translateY("10px");

  @media (min-width: 1142px) {
    margin: 50px 0px 140px 623px;
  }

  @media (max-width: 1141px) {
    width: 300px;
    margin: 50px auto 80px;
  }
`;

export default function AwardSection() {
  const fadeInILogo = useFadeIn(700, 0);
  const fadeInTitle = useFadeIn(700, 300);
  const fadeInItems = useFadeIn(700, 500);
  // ????????? ?????? ?????? ?????? ??????
  const [inputValue, setInputValue] = useState(350);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <AwardSectionBackground>
      <AwardSectionContainer>
        <ContentLogo data-testid="application-award" {...fadeInILogo}>
          2021??? 12??? ??????
        </ContentLogo>

        <ContentArticles {...fadeInTitle}>
          {
            // ?????? ?????? ?????? ??????
          }
          <input value={inputValue} onChange={handleInputValue} />
          <AwardTitle
            title={
              <>
                <strong>
                  <span>
                    <CountUpAnimation delay={2000}>350</CountUpAnimation>
                  </span>
                  ??? ???
                </strong>
                ??? ?????????
              </>
            }
          />
          <AwardTitle
            title={
              <>
                <strong>
                  <span>
                    <CountUpAnimation delay={2000}>21</CountUpAnimation>
                  </span>
                  ??? ???
                </strong>
                ??? ?????? ??????
              </>
            }
          />
          <AwardTitle
            title={
              <>
                <strong>
                  <span>
                    <CountUpAnimation delay={2000}>650</CountUpAnimation>
                  </span>
                  ??? ???
                </strong>
                ??? ?????? ??????
              </>
            }
          />
        </ContentArticles>

        <AwardItemsContainer {...fadeInItems}>
          <AwardItem
            src={badgePlayStoreSrc}
            title={
              <>
                2018 ?????? ??????????????????
                <br />
                ????????? ??? ???????????? ??????
              </>
            }
          />
          <AwardItem
            src={badgeAppleSrc}
            title={
              <>
                2018 ?????? ????????????
                <br />
                ????????? ????????? ??????
              </>
            }
          />
        </AwardItemsContainer>
      </AwardSectionContainer>
    </AwardSectionBackground>
  );
}
