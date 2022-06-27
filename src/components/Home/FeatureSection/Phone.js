import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PhoneFrame = styled.div`
  display: inline-block;
  position: relative;
  background-color: rgb(250, 250, 250);

  ::after {
    content: "";
    position: absolute;
    top: 0px;
    background-color: rgb(250, 250, 250);
  }

  @media (min-width: 1142px) {
    width: ${(props) => (props.size ? "221px" : "290px")};
    height: ${(props) => (props.size ? "456px" : "598px")};
    margin-right: 20px;
    border-radius: ${(props) => (props.size ? "32px" : "42px")};
    box-shadow: ${(props) =>
      props.size
        ? "rgb(0 0 0 / 18%) 0px 4px 7px 0px, rgb(0 0 0 / 8%) 0px -2px 3px 0px inset"
        : "rgb(0 0 0 / 18%) 0px 9px 16px 0px, rgb(0 0 0 / 8%) 0px -4px 6px 0px inset"};

    ::after {
      width: ${(props) => (props.size ? "109px" : "142px")};
      height: ${(props) => (props.size ? "25px" : "20px")};
      left: ${(props) => (props.size ? "56px" : "74px")};
      border-radius: ${(props) => (props.size ? "12px" : "16px")};
    }
  }
`;

const PhoneScreen = styled.div`
  position: absolute;
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;

  @media (min-width: 1142px) {
    width: ${(props) => (props.size ? "202px" : "262px")};
    height: ${(props) => (props.size ? "437px" : "570px")};
    top: ${(props) => (props.size ? "9px" : "14px")};
    left: ${(props) => (props.size ? "10px" : "14px")};
    border-radius: ${(props) => (props.size ? "32px" : "20px")};
    background-size: ${(props) => (props.size ? "201px 436px" : "262px 570px")};
  }
`;

export default function Phone(props) {
  const { src, size } = props;

  return (
    <PhoneFrame size={size}>
      <PhoneScreen src={src} size={size} />
    </PhoneFrame>
  );
}

Phone.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
};
