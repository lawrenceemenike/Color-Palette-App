import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  width: 150px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #f0f0f0;
  border-right: 1px solid #ddd;
  padding-top: 60px;
`;

const PaletteButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px 15px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }

  &.active {
    background-color: #d0d0d0;
    font-weight: bold;
  }
`;

function Sidebar({ currentPalette, setCurrentPalette }) {
  const palettes = ['Default', 'Pastel', 'Neon', 'Earth'];

  return (
    <SidebarWrapper>
      {palettes.map(palette => (
        <PaletteButton
          key={palette}
          onClick={() => setCurrentPalette(palette.toLowerCase())}
          className={currentPalette === palette.toLowerCase() ? 'active' : ''}
        >
          {palette}
        </PaletteButton>
      ))}
    </SidebarWrapper>
  );
}

export default Sidebar;