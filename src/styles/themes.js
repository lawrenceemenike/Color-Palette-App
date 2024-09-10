import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;