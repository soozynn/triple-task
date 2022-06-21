import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import blackLogoSrc from "../../images/logoDark.svg";

const NavBackground = styled.nav`
  /* fade-enter-done {
    opacity: 1;
    transform: translateY(0%);
  } */

  transition: height 250ms ease 0s;
  overflow: hidden;
  top: 0px;
  height: 50px;

  /* opacity: 0;
    transition: all 400ms ease-in-out 0s;
    transform: translateY(-100%);
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px; */
`;

const NavContainer = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  /* display: ${(props) => (props.isScrollDown ? "flex" : "none")}; */
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
    if (window.scrollY >= 60) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }

    console.log(isScrollDown);
  };

  window.addEventListener("scroll", handleScrollDown);

  return (
    <NavBackground props={isScrollDown}>
      <NavContainer>
        <LogoWrapper to="/">
          <Logo src={blackLogoSrc} />
        </LogoWrapper>
        <MyBookingsWrapper>
          <MyBookings to="/my-bookings">내 예약</MyBookings>
        </MyBookingsWrapper>
      </NavContainer>
    </NavBackground>
  );
}
