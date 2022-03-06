import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'components/organisms/Slider/Slider';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const Homepage = (props) => {
  return (
    <MainTemplate>
      <Slider />
      <h1>Homepage</h1>
    </MainTemplate>
  );
};

Homepage.propTypes = {};

export default Homepage;
