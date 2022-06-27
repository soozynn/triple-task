import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const AwardTitleContainer = styled.div`
  color: var(--color-basic);

  @media (min-width: 1142px) {
    margin-bottom: 20px;
    font-size: 36px;
    letter-spacing: -1px;
  }

  @media (max-width: 1141px) {
    margin-bottom: 10px;
    font-size: 20px;
    letter-spacing: -0.5px;
  }

  strong {
    font-weight: bold;
  }
`;

export default function AwardTitle(props) {
  const { title } = props;

  return (
    <AwardTitleContainer data-testid="award-title">{title}</AwardTitleContainer>
  );
}

AwardTitle.propTypes = {
  title: PropTypes.object.isRequired,
};
