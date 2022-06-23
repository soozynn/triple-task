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

  html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

  * {
  box-sizing: border-box;
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
