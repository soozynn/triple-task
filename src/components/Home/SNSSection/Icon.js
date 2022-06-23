import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const IconLink = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

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

  const handleClickIcon = () => {
    window.open(location);
  };

  return (
    <IconLink onClick={handleClickIcon}>
      <IconImage src={src} alt="sns icon" />
    </IconLink>
  );
}

Icon.propTypes = {
  location: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
