import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

const Category = ({ category: { id: index, name } }) => {
  const { id } = useParams();
  console.log(id, index);
  return <Link to={`/produkty/category=${index}`}>{name}</Link>;
};

Category.propTypes = {};

export default Category;
