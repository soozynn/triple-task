import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
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
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Navbar />
        {/* <Routes>
          <Route path="/" />
        </Routes> */}
        <MainSection />
        <Footer />
      </Router>
    </>
  );
}
