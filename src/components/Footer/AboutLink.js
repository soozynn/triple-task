import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const AboutContainer = styled(Link)`
  color: var(--color-gray);
  text-decoration: none;
  margin: 6px;
`;

export default function AboutLink(props) {
  const { location, children } = props;

  return <AboutContainer to={location}>{children}</AboutContainer>;
}

AboutLink.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
};
