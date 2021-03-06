import React from 'react';
import PropTypes from 'prop-types';
import { Section as StyledSection } from './Section.styles';

const Section = ({ children, paddingTop = true, paddingBottom = true, backgroundImage: background, darkSection = false, sectionRef }) => {
  return (
    <StyledSection
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      backgroundImage={background}
      darkSection={darkSection}
      ref={sectionRef}
      style={{
        backgroundImage: background ? `url(${background})` : null,
      }}>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {};

export default Section;
