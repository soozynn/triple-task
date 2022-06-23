import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CirclCityImageBackground = styled.img`
  position: absolute;
  font-family: sans-serif;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.31;
  color: rgb(58, 58, 58);

  @media (min-width: 1142px) {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    top: ${(props) => props.top};
    right: ${(props) => props.right};
  }
`;

export default function CircleCityImage(props) {
  const { src, width, height, top, right } = props;

  return (
    <CirclCityImageBackground
      src={src}
      alt="cities by country"
      width={width}
      height={height}
      top={top}
      right={right}
    />
  );
}

CircleCityImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
};
