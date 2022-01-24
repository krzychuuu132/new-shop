import { ThemeProvider } from 'styled-components';
import { Container, GridThemeProvider } from 'styled-bootstrap-grid';
import { theme } from 'assets/styles/theme.js';
import { gridTheme } from 'assets/styles/gridTheme.js';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import Shop from './Shop';
import Realizations from './Realizations';
import Contact from './Contact';
import Homepage from './Homepage';
import LogIn from './LogIn';
import Register from './Register';
import IsAuthProvider from 'providers/IsAuthProvider';
import Products from './Products';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GridThemeProvider gridTheme={gridTheme}>
          <GlobalStyle />
          <MainTemplate>
            <IsAuthProvider>
              <Wrapper>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/realizations" element={<Realizations />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/zaloguj" element={<LogIn />} />
                  <Route path="/rejestracja" element={<Register />} />
                  <Route path="/produkty" element={<Products />} />
                </Routes>
              </Wrapper>
            </IsAuthProvider>
          </MainTemplate>
        </GridThemeProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
