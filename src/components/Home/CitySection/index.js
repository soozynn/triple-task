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

        <CircleCityImage
          src={newyorkImageSrc}
          width="160px"
          height="160px"
          top="343px"
          right="438px"
        />
        <CircleCityImage
          src={vladivostokImageSrc}
          width="140px"
          height="140px"
          top="182px"
          right="315px"
        />
        <CircleCityImage
          src={busanImageSrc}
          width="200px"
          height="200px"
          top="151px"
          right="51px"
        />
        <CircleCityImage
          src={sydneyImageSrc}
          width="150px"
          height="150px"
          top="173px"
          right="-142px"
        />
        <CircleCityImage
          src={gangreungImageSrc}
          width="200px"
          height="200px"
          top="346px"
          right="204px"
        />
        <CircleCityImage
          src={jejuImageSrc}
          width="220px"
          height="220px"
          top="368px"
          right="-67px"
        />
        <CircleCityImage
          src={laosImageSrc}
          width="130px"
          height="130px"
          top="523px"
          right="554px"
        />
        <CircleCityImage
          src={parisImageSrc}
          width="170px"
          height="170px"
          top="561px"
          right="339px"
        />
        <CircleCityImage
          src={londonImageSrc}
          width="200px"
          height="200px"
          top="577px"
          right="90px"
        />
        <CircleCityImage
          src={budapestImageSrc}
          width="170px"
          height="170px"
          top="568px"
          right="-200px"
        />
        <CircleCityImage
          src={melbourneImageSrc}
          width="120px"
          height="120px"
          top="717px"
          right="-42px"
        />
      </CitySectionContainer>
    </CitySectionBackground>
  );
}
