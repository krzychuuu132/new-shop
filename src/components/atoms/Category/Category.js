import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CategoryLink } from './Category.styles';

const Category = ({ category: { id: index, name } }) => (
  <CategoryLink to={`/produkty/category=${index}`} activeClassName="active">
    {name}
  </CategoryLink>
);

Category.propTypes = {};

export default Category;
