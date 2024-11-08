"use client";
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from "./component/Navbar";
import Body from "./component/Body";
import Footer from "./component/Footer";

const themes = {
  light: { background: '#87CEEB', color: '#000' },
  dark: { background: '#000080', color: '#fff' },
  coffeeLatte: { background: '#D9CBAE', color: '#000' },
};

const Divider = styled.div`
  height: 2px;
  background-color: ${(props) => props.theme.color};
  margin: 0rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1); /* Bayangan untuk efek kedalaman */
  transition: background-color 0.3s ease; /* Transisi warna */
`;

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'coffeeLatte'>('light');

  return (
    <ThemeProvider theme={themes[theme]}>
      <div>
        <Navbar setTheme={setTheme} />
        <Divider /> {/* Pembatas antara Navbar dan Body */}
        <Body />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;