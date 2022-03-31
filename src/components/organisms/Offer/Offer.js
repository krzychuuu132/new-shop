import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/atoms/Section/Section';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { Description, Title } from './Offer.styles';

const Offer = ({ picture, backgroundImage }) => {
  return (
    <Section backgroundImage={backgroundImage}>
      <Container>
        <Row alignItems="center">
          <Col xl="7">
            <Title>Nasza oferta</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              condimentum semper risus. Sed et sem sagittis, eleifend lectus
              euismod, iaculis sapien. Nunc tristique pretium urna. Sed laoreet
              faucibus urna, sit amet pretium velit scelerisque vitae. Praesent
              scelerisque blandit ex sit amet tincidunt. Ut condimentum cursus
              lectus sed mattis. In aliquam orci tellus, et iaculis leo luctus
              fringilla.
            </Description>
          </Col>
          <Col xl="4" xlOffset="1">
            <img src={picture} className="section-image" />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

Offer.propTypes = {};

export default Offer;
