import React from 'react';
import PropTypes from 'prop-types';
import { Section as StyledSection } from './Section.styles';

const Section = ({
  children,
  paddingTop = true,
  paddingBottom = true,
  background,
}) => {
  return (
    <StyledSection
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      background={background}
      style={{ backgroundImage: background ? `url(${background})` : null }}>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {};

export default Section;
