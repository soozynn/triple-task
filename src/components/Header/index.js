import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logoSrc from "../../images/logo.png";

const HeaderContainer = styled.nav`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  z-index: 1;
  position: absolute;
  right: 0px;
  left: 0px;
  /* background-color: transparent; */

  @media (max-width: 1141px) {
    padding: 42px 14px 0px;
  }

  @media (min-width: 1142px) {
    padding: 83px 50px 17px;
  }
`;

const Logo = styled.img`
  display: inline-block;
  vertical-align: top;

  @media (max-width: 1141px) {
    width: 56px;
    height: 18px;
    background-size: 56px 18px;
  }

  @media (min-width: 1142px) {
    width: 77px;
    height: 25px;
    background-size: 77px 25px;
  }
`;

const MyBookingsWrapper = styled.div`
  display: inline-block;
  margin: 0px 0px 0px 34px;
`;

const MyBookings = styled(Link)`
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;

  @media (max-width: 1141px) {
    font-size: 13px;
    margin-left: 12px;
  }

  @media (min-width: 1142px) {
    font-size: 17px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={logoSrc} />
      </Link>
      <MyBookingsWrapper>
        <MyBookings to="/my-bookings">내 예약</MyBookings>
      </MyBookingsWrapper>
    </HeaderContainer>
  );
}
