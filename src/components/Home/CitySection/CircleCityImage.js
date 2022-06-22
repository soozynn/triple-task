import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CirclCityImageBackground = styled.img`
  font-family: sans-serif;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.31;
  color: rgb(58, 58, 58);

  @media (min-width: 1142px) {
    /* width: 200px;
    height: 200px;
    top: 346px;
    right: 204px; */
  }

  @media (max-width: 1141px) {
    /* width: 75px;
    height: 75px;
    top: 301px;
    left: 50%;
    margin-left: 100px; */
  }
`;

export default function CircleCityImage(props) {
  const { src, pcSize, mobileSize } = props;
  const { pcWidth, pcHeight, pcTop, pcRight } = pcSize;
  const { mobileWidth, mobileHeight, mobileTop, mobileRight } = mobileSize;

  return (
    <CirclCityImageBackground
      src={src}
      alt="city-image"
      pcSize={pcSize}
      mobileSize={mobileSize}
    />
  );
}

CircleCityImage.propTypes = {
  src: PropTypes.string.isRequired,
  pcSize: PropTypes.objectOf,
  mobileSize: PropTypes.objectOf,
};
