import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logoSrc from "../images/logoDark.png";

const NavBackground = styled.nav`
  top: 0px;
  height: 50px;

  transition: ${(props) =>
    props.isScrollDown ? "height 250ms ease 0s" : "none"};
  overflow: hidden;
  background-color: none;
`;

const NavContainer = styled.div`
  background-color: rgb(255, 255, 255);
  display: ${(props) => (props.isScrollDown ? "flex" : "none")};
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 1px solid rgb(239, 239, 239);
  padding: 0px 6px;
  height: 50px;
  box-sizing: border-box;
`;

const LogoWrapper = styled(Link)`
  margin: 0px;
  padding: 10px 8px;
  display: flex;
`;

const Logo = styled.img`
  display: block;
  width: 57px;
  height: 20px;
`;

const MyBookingsWrapper = styled.div`
  margin-left: auto;
`;

const MyBookings = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  color: rgba(58, 58, 58, 0.8);
  font-size: 14px;
  padding: 10px 8px;
`;

export default function Navbar() {
  const [isScrollDown, setIsScrollDown] = useState(false);

  const handleScrollDown = () => {
    if (window.scrollY >= 90) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  };

  window.addEventListener("scroll", handleScrollDown);

  return (
    <NavBackground props={isScrollDown}>
      <NavContainer>
        <LogoWrapper to="/">
          <Logo src={logoSrc} />
        </LogoWrapper>
        <MyBookingsWrapper>
          <MyBookings to="/my-bookings">내 예약</MyBookings>
        </MyBookingsWrapper>
      </NavContainer>
    </NavBackground>
  );
}
