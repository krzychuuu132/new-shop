import React from 'react';
import PropTypes from 'prop-types';
import { LoaderWapper } from './Loader.styles';

const Loader = ({ loading }) => (
  <LoaderWapper loading={loading}>
    <p>trwa ładowanie...</p>
  </LoaderWapper>
);

Loader.propTypes = {};

export default Loader;
