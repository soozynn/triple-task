import React from "react";
import styled from "styled-components";

import phoneScreen02Src from "../../images/featureSection/phoneScreen02.png";
import phoneScreen03Src from "../../images/featureSection/phoneScreen03.png";
import phoneScreen04Src from "../../images/featureSection/phoneScreen04.png";
import phoneScreen05Src from "../../images/featureSection/phoneScreen05.png";
import phoneScreen06Src from "../../images/featureSection/phoneScreen06.png";
import phoneScreen07Src from "../../images/featureSection/phoneScreen07.png";

import Header from "./Header/index";
import Navbar from "../Navbar/index";
import MainSection from "./MainSection/index";
import AwardSection from "./AwardSection/index";
import FeatureSection from "./FeatureSection/index";
import CitySection from "./CitySection";
import SNSSection from "./SNSSection/index";
import Footer from "../Footer/index";

const UnderFooter = styled.div`
  display: none;

  @media (max-width: 1141px) {
    display: block;
    height: 54px;
    background-color: rgba(46, 46, 46, 0.5);
  }
`;

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <MainSection />
      <AwardSection />
      <FeatureSection
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
        firstScreenSrc={phoneScreen02Src}
        secondScreenSrc={phoneScreen03Src}
        thirdScreenSrc={phoneScreen04Src}
      />
      <CitySection />
      <FeatureSection
        title={
          <>
            복잡한 여행 일정
            <br />
            이렇게나 간편하게
          </>
        }
        subTitle={
          <>
            동행인과 함께 짜는 지도 동선 일정.
            <br />
            여행 가계부로 경비 정산까지 한 번에.
          </>
        }
        firstScreenSrc={phoneScreen05Src}
        secondScreenSrc={phoneScreen06Src}
        thirdScreenSrc={phoneScreen07Src}
        size
      />
      <SNSSection />
      <Footer />
      <UnderFooter />
    </>
  );
}
