import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const IconLink = styled(Link)``;

const IconImage = styled.img`
  @media (min-width: 1142px) {
    width: 34px;
    height: 34px;
  }

  @media (max-width: 1141px) {
    width: 22px;
    height: 22px;
  }
`;

export default function Icon(props) {
  const { location, src } = props;

  return (
    <IconLink to={location} target="_blank">
      <IconImage src={src}></IconImage>
    </IconLink>
  );
}

Icon.propTypes = {
  location: PropTypes.string,
  src: PropTypes.string,
};
