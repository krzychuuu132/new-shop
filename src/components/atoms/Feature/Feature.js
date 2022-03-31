import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Title, Wrapper } from './Feature.styles';

const Feature = ({ feature: { icon, title } }) => {
  return (
    <Wrapper>
      <Icon src={icon} />
      <Title>{title}</Title>
    </Wrapper>
  );
};

Feature.propTypes = {};

export default Feature;
