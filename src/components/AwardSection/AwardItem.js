import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const AwardItemContainer = styled.div`
  display: inline-block;
  font-family: sans-serif;
  background-image: ${(props) => `url(${props.src})`};
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;

  @media (min-width: 1142px) {
    background-size: 54px 54px;
    height: 54px;
    padding: 5px 0px 5px 62px;
    font-size: 14px;
    line-height: 22px;
    margin-right: 39px;
  }
`;

export default function AwardItem({ props }) {
  console.log(props);
  if (!props) return;

  const { src, item, title } = props;

  return (
    <AwardItemContainer src={src}>
      {item}
      <br />
      {title}
    </AwardItemContainer>
  );
}

AwardItem.propTypes = {
  src: PropTypes.string,
  item: PropTypes.string,
  title: PropTypes.string,
};
