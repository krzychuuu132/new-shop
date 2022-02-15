import React from 'react';
import { gql, useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import Category from 'components/atoms/Category/Category';
import { CategoriesNav } from './Categories.styles';

const GET_CATEGORIES = gql`
  query getCatgories {
    categories {
      id
      name
    }
  }
`;

const Categories = (props) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error! ${error.message}`}</p>;

  const { categories } = data;

  return (
    <CategoriesNav>
      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </CategoriesNav>
  );
};

Categories.propTypes = {};

export default Categories;
