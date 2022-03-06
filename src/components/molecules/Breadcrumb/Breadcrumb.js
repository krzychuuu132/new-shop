import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Background } from './Breadcrumb.styles';

import BreadcrumbPicture from 'assets/breadcrumb/breadcrumb.jpg';

const Breadcrumb = ({ title }) => {
  return (
    <Wrapper>
      <Background src={BreadcrumbPicture} />
      <h1>{title}</h1>
    </Wrapper>
  );
};

Breadcrumb.propTypes = {};

export default Breadcrumb;
