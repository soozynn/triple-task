import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const AboutContainer = styled.div`
  margin: 6px;
  color: var(--color-gray);
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export default function AboutLink(props) {
  const { location, children } = props;

  const handleClickAboutLink = () => {
    window.open(location);
  };

  return (
    <AboutContainer onClick={handleClickAboutLink}>{children}</AboutContainer>
  );
}

AboutLink.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
};
