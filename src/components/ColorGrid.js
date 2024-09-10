import React from 'react';
import styled from 'styled-components';
import ColorSwatch from './ColorSwatch';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1px;
  padding: 1px;
  background-color: #f0f0f0;
  margin-left: 150px; // Adjusted to match sidebar width
`;

function ColorGrid({ palette }) {
  // Define color palettes
  const palettes = {
    default: [
      { name: 'TURQUOISE', hex: '#40E0D0' },
      { name: 'EMERALD', hex: '#50C878' },
      { name: 'PETER RIVER', hex: '#3498DB' },
      { name: 'AMETHYST', hex: '#9B59B6' },
      { name: 'WET ASPHALT', hex: '#34495E' },
      { name: 'GREEN SEA', hex: '#16A085' },
      { name: 'NEPHRITIS', hex: '#27AE60' },
      { name: 'BELIZE HOLE', hex: '#2980B9' },
      { name: 'WISTERIA', hex: '#8E44AD' },
      { name: 'MIDNIGHT BLUE', hex: '#2C3E50' },
      { name: 'SUN FLOWER', hex: '#F1C40F' },
      { name: 'CARROT', hex: '#E67E22' },
      { name: 'ALIZARIN', hex: '#E74C3C' },
      { name: 'CLOUDS', hex: '#ECF0F1' },
      { name: 'CONCRETE', hex: '#95A5A6' },
      { name: 'ORANGE', hex: '#F39C12' },
      { name: 'PUMPKIN', hex: '#D35400' },
      { name: 'POMEGRANATE', hex: '#C0392B' },
      { name: 'SILVER', hex: '#BDC3C7' },
      { name: 'ASBESTOS', hex: '#7F8C8D' },
    ],
    pastel: [
      { name: 'PASTEL PINK', hex: '#FFD1DC' },
      { name: 'PASTEL BLUE', hex: '#AEC6CF' },
      { name: 'PASTEL GREEN', hex: '#B0F2B4' },
      { name: 'PASTEL YELLOW', hex: '#FDFD96' },
      { name: 'PASTEL LAVENDER', hex: '#E6E6FA' },
      // Add more pastel colors...
    ],
    neon: [
      { name: 'NEON PINK', hex: '#FF6EC7' },
      { name: 'NEON BLUE', hex: '#00FFFF' },
      { name: 'NEON GREEN', hex: '#39FF14' },
      { name: 'NEON YELLOW', hex: '#FFFF00' },
      { name: 'NEON ORANGE', hex: '#FF9933' },
      // Add more neon colors...
    ],
    earth: [
      { name: 'SOIL BROWN', hex: '#8B4513' },
      { name: 'FOREST GREEN', hex: '#228B22' },
      { name: 'SAND BEIGE', hex: '#F4A460' },
      { name: 'STONE GRAY', hex: '#708090' },
      { name: 'CLAY RED', hex: '#B22222' },
      // Add more earth colors...
    ],
  };

  const colors = palettes[palette] || palettes.default;

  return (
    <GridWrapper>
      {colors.map(color => (
        <ColorSwatch key={color.hex} color={color} />
      ))}
    </GridWrapper>
  );
}

export default ColorGrid;