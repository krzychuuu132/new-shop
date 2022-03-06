import Navbar from 'components/organisms/Navbar/Navbar';
import Slider from 'components/organisms/Slider/Slider';
import React, { useEffect } from 'react';
import { Wrapper } from './MainTemplate.styles';
import { gql, useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import Breadcrumb from 'components/molecules/Breadcrumb/Breadcrumb';
import ShortBasket from 'components/organisms/ShortBasket/ShortBasket';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      price
      name
      description
      short_description
      sale_price
      images {
        src
      }
      categories {
        id
        name
      }
      attributes {
        options
      }
    }
  }
`;

const MainTemplate = ({ children }) => {
  const { loading, error, data: getProducts } = useQuery(GET_PRODUCTS);

  const dispatch = useDispatch();

  useEffect(() => {
    if (getProducts) {
      dispatch({ type: 'ADD_PRODUCTS', products: getProducts.products });
    }
  }, [getProducts]);
  return (
    <Wrapper>
      <Navbar />

      {children}

      <ShortBasket />
    </Wrapper>
  );
};

export default MainTemplate;
