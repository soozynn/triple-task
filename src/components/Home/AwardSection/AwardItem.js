import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const AwardItemContainer = styled.div`
  display: inline-block;
  background-image: ${(props) => `url(${props.src})`};
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;

  @media (min-width: 1142px) {
    height: 54px;
    margin-right: 39px;
    padding: 5px 0px 5px 62px;
    background-size: 54px 54px;
    font-size: 14px;
    line-height: 22px;
  }

  @media (max-width: 1141px) {
    height: 39px;
    padding: 4px 0px 4px 45px;
    background-size: 39px 39px;
    font-size: 10px;
    line-height: 15px;

    &:first-child {
      margin-right: 28.5px;
    }
  }
`;

export default function AwardItem(props) {
  const { src, title } = props;

  return (
    <AwardItemContainer data-testid="award-item" src={src}>
      {title}
    </AwardItemContainer>
  );
}

AwardItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired,
};
