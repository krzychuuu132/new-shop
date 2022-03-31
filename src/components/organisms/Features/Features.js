import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'styled-bootstrap-grid';

import Section from 'components/atoms/Section/Section';
import Feature from 'components/atoms/Feature/Feature';
import { Wrapper } from './Features.styles';

import Consultancy from 'assets/icons/consultancy.svg';
import Efficiency from 'assets/icons/efficiency.svg';
import Experience from 'assets/icons/experience.svg';
import Quality from 'assets/icons/quality.svg';
import Price from 'assets/icons/price.svg';

const features = [
  {
    id: 0,
    icon: `${Consultancy}`,
    title: 'Jakość',
  },
  {
    id: 0,
    icon: `${Efficiency}`,
    title: 'Doradztwo',
  },
  {
    id: 0,
    icon: `${Experience}`,
    title: 'Skuteczność',
  },
  {
    id: 0,
    icon: `${Quality}`,
    title: 'Najlepsze ceny',
  },
  {
    id: 0,
    icon: `${Price}`,
    title: 'Doświadczenie',
  },
];

const Features = () => {
  return (
    <Section darkSection={true}>
      <Container>
        <h2 className="h1">Dlaczego my ?</h2>
        <Wrapper>
          {features.map((feature) => (
            <Feature feature={feature} key={feature.id} />
          ))}
        </Wrapper>
      </Container>
    </Section>
  );
};

Features.propTypes = {};

export default Features;
