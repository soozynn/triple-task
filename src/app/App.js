import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection/index";
import AwardSection from "../components/AwardSection/index";
import Footer from "../components/Footer";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-gray200: rgba(58,58,58,0.2);
    --color-gray600: rgba(58,58,58,0.6);
  }

  body, html {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: sans-serif;
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, dfn, del, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0px;
    padding: 0px;
    border: 0px;
    font: inherit;
    vertical-align: baseline;
}
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Navbar />
        <MainSection />
        <AwardSection />
        <Footer />
      </Router>
    </>
  );
}
