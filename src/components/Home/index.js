import React from "react";
import styled from "styled-components";

import Header from "./Header/index";
import Navbar from "../Navbar/index";
import MainSection from "./MainSection/index";
import AwardSection from "./AwardSection/index";
import ReservationSection from "./ReservationSection/index";
import CitySection from "./CitySection";
import LocationSection from "./LocationSection/index";
import ReviewSection from "./ReviewSection/index";
import FeatureSection from "./FeatureSection/index";
import ClubSection from "./ClubSection/index";
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
      <ReservationSection />
      <CitySection />
      <LocationSection />
      <ReviewSection />
      <FeatureSection />
      <ClubSection />
      <SNSSection />
      <Footer />
      <UnderFooter />
    </>
  );
}
