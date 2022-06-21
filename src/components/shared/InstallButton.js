import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MarketLinksContainer = styled.div`
  display: none;
  margin-top: ${(props) => props.margintTop || "76px"};

  @media (min-width: 1142px) {
    display: block;
  }
`;

const MarketLinksButton = styled.button`
  box-sizing: border-box;
  float: none;

  position: relative;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgb(255, 255, 255);
  font-weight: bold;
  transition: all 200ms ease-in-out 0s;
  width: 180px;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  color: rgb(255, 255, 255);

  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    cursor: pointer;
  }
`;

export default function Button({ margintTop }) {
  const navigate = useNavigate();

  const navigateMarketLinksButton = () => {
    navigate(
      "https://play.google.com/store/apps/details?id=com.titicacacorp.triple&pid=intro_web"
    );
  };

  return (
    <MarketLinksContainer margintTop={margintTop}>
      <MarketLinksButton onClick={navigateMarketLinksButton}>
        앱 설치하기
      </MarketLinksButton>
    </MarketLinksContainer>
  );
}
