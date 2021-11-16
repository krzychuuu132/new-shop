import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { theme } from 'assets/styles/theme.js';
import { gridTheme } from 'assets/styles/gridTheme.js';
import { GlobalStyle } from 'assets/styles/Globalstyle';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import Navbar from 'components/organisms/Navbar/Navbar';

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <GridThemeProvider gridTheme={gridTheme}>
          <GlobalStyle />
          <Navbar />

          <Container style={{ marginTop: '200px' }}>
            <Row>
              <p>
                <Col col={12}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus consequatur aliquid consectetur nisi rem consequuntur, veritatis
                  soluta similique temporibus magni modi, nam illo ex unde eos! Consequuntur tempora assumenda iste!
                </Col>
              </p>
            </Row>
          </Container>
        </GridThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Home;
