import React from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Container } from 'styled-bootstrap-grid';
import Breadcrumb from 'components/molecules/Breadcrumb/Breadcrumb';
import Section from 'components/atoms/Section/Section';

const Summary = (props) => {
  return (
    <MainTemplate>
      <Container>
        <Breadcrumb title="Podsumowanie" />
        <Section>
          <h2>Podsumowanie</h2>
        </Section>
      </Container>
    </MainTemplate>
  );
};

Summary.propTypes = {};

export default Summary;
