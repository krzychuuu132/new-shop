import React from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Container } from 'styled-bootstrap-grid';
import Breadcrumb from 'components/molecules/Breadcrumb/Breadcrumb';
import Section from 'components/atoms/Section/Section';

const Order = (props) => {
  return (
    <MainTemplate>
      <Container>
        <Breadcrumb title="Metody dostawy i płatności" />
        <Section>
          <h2>metody płatności</h2>
        </Section>
      </Container>
    </MainTemplate>
  );
};

Order.propTypes = {};

export default Order;
