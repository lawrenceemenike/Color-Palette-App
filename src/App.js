import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ColorGrid from './components/ColorGrid';
import Search from './components/Search';
import { ThemeProvider } from 'styled-components';

// Temporary placeholder for themes and globalStyles
const lightTheme = {};
const darkTheme = {};
const GlobalStyle = () => null;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPalette, setCurrentPalette] = useState('default');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Sidebar currentPalette={currentPalette} setCurrentPalette={setCurrentPalette} />
          <Routes>
            <Route path="/" element={
              <>
                <Search />
                <ColorGrid palette={currentPalette} />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;