import React from "react";
import styled from "styled-components";

import badgeTripleSrc from "../../../images/badgeTriple.png";
import badgePlayStoreSrc from "../../../images/badgePlayStore.png";
import badgeAppleSrc from "../../../images/badgeApple.png";
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
  margin: 0px auto;
  position: relative;

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
  color: rgba(58, 58, 58, 0.7);

  @media (min-width: 1142px) {
    position: absolute;
    top: 150px;
    width: 400px;
    height: 338px;
    background-size: 400px 338px;
    padding-top: 280px;
    font-size: 15px;
  }

  @media (max-width: 1141px) {
    margin: 80px auto 20px;
    width: 200px;
    height: 169px;
    background-size: 200px 169px;
    padding-top: 137px;
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

  @media (min-width: 1142px) {
    margin: 50px 0px 140px 623px;
  }

  @media (max-width: 1141px) {
    width: 300px;
    margin: 50px auto 80px;
  }
`;

export default function AwardSection(props) {
  return (
    <AwardSectionBackground>
      <AwardSectionContainer>
        <ContentLogo>2021년 12월 기준</ContentLogo>
        <ContentArticles>
          <AwardTitle number="700" unit="만 명" text="의 여행자" />
          <AwardTitle number="100" unit="만 개" text="의 여행 리뷰" />
          <AwardTitle number="470" unit="만 개" text="의 여행 일정" />
        </ContentArticles>
        <AwardItemsContainer>
          <AwardItem
            src={badgePlayStoreSrc}
            itme={"2018 구글 플레이스토어"}
            title={"올해의 앱 최우수상 수상"}
          />
          <AwardItem
            src={badgeAppleSrc}
            itme={"2018 애플 앱스토어"}
            title={"오늘의 여행앱 선정"}
          />
        </AwardItemsContainer>
      </AwardSectionContainer>
    </AwardSectionBackground>
  );
}
