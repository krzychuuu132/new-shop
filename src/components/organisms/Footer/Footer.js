import React from 'react';
import {
  StyledFooter,
  Heading,
  HeadingTitle,
  Content,
  Logo,
  Socials,
} from './Footer.styles';
import PropTypes from 'prop-types';
import ButtonLink from 'components/atoms/ButtonLink/ButtonLink';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { MenuIcon } from '../Navbar/Navbar.styles';
import PrimaryLink from 'components/atoms/PrimaryLink/PrimaryLink.js';

import mainLogo from 'assets/icons/mainLogo.png';
import { ReactComponent as FbIcon } from 'assets/icons/fb.svg';
import { ReactComponent as InstgramIcon } from 'assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <StyledFooter>
      <Container>
        <Heading>
          <HeadingTitle>Zapraszamy do zakupów w naszym sklepie!</HeadingTitle>
          <ButtonLink to="/produkty" title="Sprawdź ofertę">
            Sprawdź ofertę
          </ButtonLink>
        </Heading>
        <Content>
          <Row>
            <Col md="3" xl="6">
              <MenuIcon src={mainLogo} alt="ikona menu" />
              <Socials>
                <Link to="#">
                  <FbIcon />
                </Link>
                <Link to="#">
                  <InstgramIcon />
                </Link>
                <Link to="#">
                  <TwitterIcon />
                </Link>
              </Socials>
            </Col>
            <Col md="3" xl="2">
              <PrimaryLink to="#">Przykładowy link</PrimaryLink>
              <PrimaryLink to="#">Przykładowy link</PrimaryLink>
              <PrimaryLink to="#">Przykładowy link</PrimaryLink>
              <PrimaryLink to="#">Przykładowy link</PrimaryLink>
            </Col>
            <Col md="3" xl="2">
              <PrimaryLink to="#">Przykładowy link</PrimaryLink>
              <PrimaryLink to="#">Przykładowy link</PrimaryLink>
              <PrimaryLink to="#">Przykładowy link</PrimaryLink>
              <PrimaryLink to="#">Przykładowy link</PrimaryLink>
            </Col>
            <Col md="3" xl="2">
              <PrimaryLink to="#">Przykładowy link</PrimaryLink>
              <PrimaryLink to="#">Przykładowy link</PrimaryLink>
              <PrimaryLink to="#">Przykładowy link</PrimaryLink>
              <PrimaryLink to="#">Przykładowy link</PrimaryLink>
            </Col>
          </Row>
        </Content>
      </Container>
    </StyledFooter>
  );
};

Footer.propTypes = {};

export default Footer;
