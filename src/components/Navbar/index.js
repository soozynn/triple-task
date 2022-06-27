import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import blackLogoSrc from "../../images/navbar/logoDark.svg";

const NavBackground = styled.nav`
  top: 0px;
  left: 0px;
  right: 0px;
  display: block;
  position: fixed;
  float: none;
  opacity: ${(props) => (props.showsNavbar ? 1 : 0)};
  box-sizing: border-box;
  z-index: 3;
  transform: translateY(${(props) => (props.showsNavbar ? "-100%" : "0%")});
  transition: all 400ms ease-in-out 0s;
`;

const NavContainer = styled.div`
  top: 0px;
  height: 50px;
  overflow: hidden;
  transition: height 250ms ease 0s;

  @media (min-width: 1142px) {
    height: 80px;
  }
`;

const NavWrapper = styled.div`
  height: 50px;
  padding: 0px 6px;
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  border-bottom: 1px solid rgb(239, 239, 239);

  @media (min-width: 1142px) {
    height: 80px;
    padding: 0px 42px;
  }
`;

const LogoWrapper = styled(Link)`
  margin: 0px;
  padding: 10px 8px;
  display: flex;
`;

const Logo = styled.img`
  width: 57px;
  height: 20px;
  display: block;

  @media (min-width: 1142px) {
    width: 68px;
    height: 24px;
  }
`;

const MyBookingsWrapper = styled.div`
  margin-left: auto;
`;

const MyBookings = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 10px 8px;
  -webkit-box-align: center;
  color: rgba(58, 58, 58, 0.8);
  font-size: 14px;
  text-decoration: none;

  @media (min-width: 1142px) {
    padding: 10px 14px;
    font-size: 17px;
  }
`;

export default function Navbar() {
  const [showsNavbar, setShowsNavbar] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY >= 100) {
      setShowsNavbar(true);
    } else {
      setShowsNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <NavBackground>
      <NavContainer showsNavbar={showsNavbar}>
        <NavWrapper>
          <LogoWrapper to="/">
            <Logo src={blackLogoSrc} />
          </LogoWrapper>

          <MyBookingsWrapper>
            <MyBookings to="/my-bookings">내 예약</MyBookings>
          </MyBookingsWrapper>
        </NavWrapper>
      </NavContainer>
    </NavBackground>
  );
}
