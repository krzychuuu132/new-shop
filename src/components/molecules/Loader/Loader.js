import React from 'react';
import PropTypes from 'prop-types';
import { LoaderWapper } from './Loader.styles';

const Loader = ({ loading }) => {
  return <LoaderWapper loading={!!loading} />;
};

Loader.propTypes = {
  loading: PropTypes.bool,
};

export default Loader;
