import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LeftTitleContainer = styled.h2`
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.31;
  color: rgb(58, 58, 58);

  @media (min-width: 1142px) {
    position: absolute;
    margin: 0px;
    top: 240px;
    font-size: 52px;
    letter-spacing: -1px;
  }

  @media (max-width: 1141px) {
    margin-top: 110px;
    font-size: 28px;
    letter-spacing: -0.5px;
    text-align: center;
  }
`;

const LeftSubTitle = styled.div`
  font-family: sans-serif;
  font-weight: normal;
  font-style: normal;
  color: rgb(58, 58, 58);

  @media (min-width: 1142px) {
    margin: 20px 0px 0px;
    font-size: 17px;
    line-height: 1.76;
    letter-spacing: -0.3px;
  }

  @media (max-width: 1141px) {
    margin: 12px 0px 0px;
    font-size: 16px;
    line-height: 1.71;
    letter-spacing: -0.5px;
    text-align: center;
  }
`;

export default function LeftTitle(props) {
  const { title, subTitle } = props;

  return (
    <LeftTitleContainer>
      {title}
      <LeftSubTitle>{subTitle}</LeftSubTitle>
    </LeftTitleContainer>
  );
}

LeftTitle.propTypes = {
  title: PropTypes.object.isRequired,
  subTitle: PropTypes.object.isRequired,
};
