import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import backgroundSrc from "../../../images/clubBackground.svg";
import clubLogoSrc from "../../../images/logoProgram.png";

const ClubSectionBackground = styled.div`
  position: relative;
  overflow: hidden;
  background: url(${backgroundSrc}) center center / cover rgb(54, 102, 255);
`;

const ClubSectionContainer = styled.div`
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

const ContentText = styled.h1`
  font-weight: bold;
  color: rgb(255, 255, 255);
  margin: 0px;
  text-align: center;
  width: 100%;
  opacity: 0;
  transform: translateY(10px);

  @media (min-width: 1142px) {
    padding-top: 182px;
    font-size: 28px;
  }

  @media (max-width: 1141px) {
    padding-top: 158px;
    font-size: 20px;
  }
  /* fade-enter-done {
    opacity: 1;
    transform: translateY(0%);
    transition: all 700ms ease-in-out 0s;
} */
`;

const LogoImage = styled.h2`
  background-image: url(${clubLogoSrc});
  background-repeat: no-repeat;
  opacity: 0;
  transform: translateY(10px);

  @media (min-width: 1142px) {
    width: 310px;
    height: 333px;
    background-size: 310px 333px;
    margin: 30px auto;
  }

  @media (max-width: 1141px) {
    width: 155px;
    height: 167px;
    background-size: 155px 167px;
    margin: 30px auto 20px;
  }

  /* fade-enter-done {
    opacity: 1;
    transform: translateY(0%);
    transition: all 700ms ease-in-out 100ms;
} */
`;

const SubText = styled.p`
  font-family: sans-serif;
  margin: 0px;
  color: rgb(255, 255, 255);
  text-align: center;
  opacity: 0;
  transform: translateY(10px);

  @media (min-width: 1142px) {
    margin-bottom: 60px;
    font-size: 17px;
    line-height: 1.76;
    letter-spacing: -0.3px;
  }

  @media (max-width: 1141px) {
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 1.71;
    letter-spacing: -0.5px;
  }

  /* fade-enter-done {
    opacity: 1;
    transform: translateY(0%);
    transition: all 700ms ease-in-out 200ms;
} */
`;

const ClubLinks = styled(Link)`
  display: block;
  margin: 0px auto;
  border-radius: 30px;
  box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px 0px;
  background-color: rgb(255, 255, 255);
  color: rgb(54, 102, 255);
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  opacity: 0;
  transform: translateY(10px);

  @media (min-width: 1142px) {
    width: 200px;
    font-size: 17px;
    line-height: 1.76;
    letter-spacing: -0.3px;
    padding: 15px 0px;
  }

  @media (max-width: 1141px) {
    width: 140px;
    padding: 11px 0px;
    font-size: 11.9px;
    line-height: 1.76;
    letter-spacing: -0.2px;
  }

  /* fade-enter-done {
    opacity: 1;
    transform: translateY(0%);
    transition: all 700ms ease-in-out 300ms;
} */
`;

export default function ClubSection() {
  return (
    <ClubSectionBackground>
      <ClubSectionContainer>
        <ContentText>Recruiting Now!</ContentText>
        <LogoImage></LogoImage>
        <SubText></SubText>
        <ClubLinks
          to={
            "https://play.google.com/store/apps/details?id=com.titicacacorp.triple&pid=intro_web"
          }
        ></ClubLinks>
      </ClubSectionContainer>
    </ClubSectionBackground>
  );
}
