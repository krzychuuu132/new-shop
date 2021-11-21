import { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { theme } from 'assets/styles/theme.js';
import { gridTheme } from 'assets/styles/gridTheme.js';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'styled-bootstrap-grid';
import Home from './Home';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GridThemeProvider gridTheme={gridTheme}>
          <GlobalStyle />
          <MainTemplate>
            <Wrapper>
              <Container style={{ marginTop: '200px' }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </Container>
            </Wrapper>
          </MainTemplate>
        </GridThemeProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
