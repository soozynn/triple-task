import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import MyPage from "../components/MyPage/index";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-gray: rgba(58,58,58,1);
    --color-gray200: rgba(58,58,58,0.2);
    --color-gray500: rgba(58,58,58,0.5);
    --color-gray600: rgba(58,58,58,0.6);
  }

  body, html {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: sans-serif;
  }

  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
    font: inherit;
    vertical-align: baseline;
  }

  a:any-link {
    text-decoration: none;
}
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-bookings" element={<MyPage />} />
          {/* <Route element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}
