import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  box-sizing: border-box;
  float: none;
  min-width: 280px;
  max-width: 768px;
  padding: 30px 30px 40px;
  margin-left: auto;
  margin-right: auto;
`;

export default function Footer() {
  return <FooterContainer></FooterContainer>;
}
