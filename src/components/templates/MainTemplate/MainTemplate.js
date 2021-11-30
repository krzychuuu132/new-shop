import Navbar from 'components/organisms/Navbar/Navbar';
import Slider from 'components/organisms/Slider/Slider';
import React from 'react';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <Slider />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
