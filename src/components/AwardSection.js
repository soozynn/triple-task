import React from "react";
import styled from "styled-components";

import badgeTripleSrc from "../images/badgeTriple.png";
import badgePlayStoreSrc from "../images/playStore.png";

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
`;

const ContentArticles = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;

  color: rgb(58, 58, 58);
`;

const AwardItemContainer = styled.div`
  display: inline-block;
  font-family: sans-serif;
  background-image: url(${badgePlayStoreSrc});
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;

  @media (min-width: 1142px) {
    background-size: 54px 54px;
    height: 54px;
    padding: 5px 0px 5px 62px;
    font-size: 14px;
    line-height: 22px;
    margin-right: 39px;
  }
`;

export default function AwardSection(props) {
  return (
    <AwardSectionBackground>
      <AwardSectionContainer>
        <ContentLogo>2021년 12월 기준</ContentLogo>
        <ContentArticles>
          <div>
            <strong>
              <span>700</span>만 명
            </strong>
            의 여행자
          </div>
          {/* <div></div>
          <div></div>
          동일한 컴포넌트 쪼개기 */}
        </ContentArticles>
        <AwardItemContainer>
          <div>
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </div>
          {/* 동일한 컴포넌트 재활용 필요 */}
        </AwardItemContainer>
      </AwardSectionContainer>
    </AwardSectionBackground>
  );
}
