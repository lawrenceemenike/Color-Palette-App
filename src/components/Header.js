import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${props => props.theme.headerBg};
  color: ${props => props.theme.text};
  position: fixed;
  top: 0;
  left: 150px; // Adjusted to match sidebar width
  right: 0;
  z-index: 1000;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

function Header({ toggleTheme, isDarkMode }) {
  return (
    <HeaderWrapper>
      <h1>Color Palette App</h1>
      <ThemeToggle onClick={toggleTheme}>
        {isDarkMode ? '🌞' : '🌙'}
      </ThemeToggle>
    </HeaderWrapper>
  );
}

export default Header;