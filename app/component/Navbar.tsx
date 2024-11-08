"use client"
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ThemeButton = styled.button`
  background: none;
  border: 1px solid ${(props) => props.theme.color};
  color: ${(props) => props.theme.color};
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-left: 1rem;
  &:hover {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.background};
  }
`;

const Divider = styled.div`
  height: 2px;
  background-color: ${(props) => props.theme.color};
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(1, 1, 1, 1); /* Bayangan untuk efek kedalaman */
  transition: background-color 0.3s ease; /* Transisi warna */
`;

const Navbar: React.FC<{ setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark' | 'coffeeLatte'>> }> = ({ setTheme }) => {
  return (
    <NavbarContainer>
      <h1>My Navbar</h1>
      <div>
        <ThemeButton onClick={() => setTheme('light')}>Light</ThemeButton>
        <ThemeButton onClick={() => setTheme('dark')}>Dark</ThemeButton>
        <ThemeButton onClick={() => setTheme('coffeeLatte')}>Coffee</ThemeButton>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;