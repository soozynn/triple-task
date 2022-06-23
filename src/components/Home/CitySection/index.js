import React from "react";
import styled from "styled-components";

import newyorkImageSrc from "../../../images/citySection/newyork.png";
import vladivostokImageSrc from "../../../images/citySection/vladivostok.png";
import busanImageSrc from "../../../images/citySection/busan.png";
import sydneyImageSrc from "../../../images/citySection/sydney.png";
import gangreungImageSrc from "../../../images/citySection/gangreung.png";
import jejuImageSrc from "../../../images/citySection/jeju.png";
import laosImageSrc from "../../../images/citySection/laos.png";
import parisImageSrc from "../../../images/citySection/paris.png";
import londonImageSrc from "../../../images/citySection/london.png";
import budapestImageSrc from "../../../images/citySection/budapest.png";
import melbourneImageSrc from "../../../images/citySection/melbourne.png";
import LeftTitle from "../../shared/LeftTitle";
import CircleCityImage from "./CircleCityImage";

const CitySectionBackground = styled.div`
  position: relative;
  overflow: hidden;
  background: center center / cover rgb(245, 245, 245);
`;

const CitySectionContainer = styled.div`
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

export default function CitySection() {
  return (
    <CitySectionBackground>
      <CitySectionContainer>
        <LeftTitle
          title={
            <>
              국내도 해외도
              <br />
              무료 가이드
            </>
          }
          subTitle={
            <>
              흩어져 있는 여행 정보를 한눈에.
              <br />
              깔끔하고 자세한 도시별 가이드로
              <br />
              검색 지옥에서 해방될 시간.
            </>
          }
        />

        {/* <CircleCityImage src={newyorkImageSrc} width="160" height="160" top="343" right="438" />
        <CircleCityImage src={vladivostokImageSrc} width="140" height="140" top="140" right="" />
        <CircleCityImage src={busanImageSrc} width="" height="" top="" right="" />
        <CircleCityImage src={sydneyImageSrc} width="" height="" top="" right="" />
        <CircleCityImage src={gangreungImageSrc} width="" height="" top="" right="" />
        <CircleCityImage src={jejuImageSrc} width="" height="" top="" right="" />
        <CircleCityImage src={laosImageSrc}  width="" height="" top="" right=""/>
        <CircleCityImage src={parisImageSrc} width="" height="" top="" right=""/>
        <CircleCityImage src={londonImageSrc} width="" height="" top="" right=""/>
        <CircleCityImage src={budapestImageSrc} width="" height="" top="" right=""/>
        <CircleCityImage src={melbourneImageSrc} width="" height="" top="" right=""/> */}
      </CitySectionContainer>
    </CitySectionBackground>
  );
}
