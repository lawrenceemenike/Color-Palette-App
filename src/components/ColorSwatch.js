import React from 'react';
import styled from 'styled-components';

const SwatchWrapper = styled.div`
  aspect-ratio: 1;
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;

const ColorBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ColorInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${SwatchWrapper}:hover & {
    transform: translateY(0);
  }
`;

function ColorSwatch({ color }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color.hex);
    alert(`Copied ${color.hex} to clipboard!`);
  };

  return (
    <SwatchWrapper onClick={copyToClipboard}>
      <ColorBox color={color.hex}>
        <span>{color.name}</span>
      </ColorBox>
      <ColorInfo>
        <p>{color.hex}</p>
      </ColorInfo>
    </SwatchWrapper>
  );
}

export default ColorSwatch;