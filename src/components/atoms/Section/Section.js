import React from 'react';
import PropTypes from 'prop-types';
import { Section as StyledSection } from './Section.styles';

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

Section.propTypes = {};

export default Section;
