import Breadcrumb from 'components/molecules/Breadcrumb/Breadcrumb';
import React from 'react';
import { Row, Col, Container } from 'styled-bootstrap-grid';

const About = () => {
  return (
    <>
      <Container>
        <Breadcrumb title="o nas" />
        <Row>
          <Col col={12}>
            <h1>About</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
