import React from "react";

import Header from "./Header/index";
import Navbar from "../Navbar/index";
import MainSection from "./MainSection/index";
import AwardSection from "./AwardSection/index";
import ReservationSection from "./ReservationSection/index";
import CitySection from "./CitySection";
import ItinerarySection from "./ItinerarySection/index";
import LocationSection from "./LocationSection/index";
import ReviewSection from "./ReviewSection/index";
import FeatureSection from "./FeatureSection/index";
import ClubSection from "./ClubSection/index";
import SNSSection from "./SNSSection/index";
import Footer from "../Footer/index";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <MainSection />
      <AwardSection />
      <ReservationSection />
      <CitySection />
      <ItinerarySection />
      <LocationSection />
      <ReviewSection />
      <FeatureSection />
      <ClubSection />
      <SNSSection />
      <Footer />
    </>
  );
}
