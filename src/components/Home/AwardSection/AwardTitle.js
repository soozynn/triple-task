import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const AwardTitleContainer = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
  color: rgb(58, 58, 58);

  @media (min-width: 1142px) {
    font-size: 36px;
    letter-spacing: -1px;
    margin-bottom: 20px;
  }

  @media (max-width: 1141px) {
    font-size: 20px;
    letter-spacing: -0.5px;
    margin-bottom: 10px;
  }
`;

const BoldText = styled.strong`
  font-weight: bold;
`;

export default function AwardTitle(props) {
  const { number, unit, text } = props;

  return (
    <AwardTitleContainer>
      <div>
        <BoldText>
          <span>{number}</span>
          {unit}
        </BoldText>
        {text}
      </div>
    </AwardTitleContainer>
  );
}

AwardTitle.propTypes = {
  number: PropTypes.string,
  unit: PropTypes.string,
  text: PropTypes.string,
};
