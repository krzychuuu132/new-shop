import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductDetailsImage = styled.div`
  display: flex;
  justify-content: center;
  img {
    display: block;
    max-width: 100%;
    max-height: 40rem;
  }
`;

const ProductsDetailsContent = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr;

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export { ProductDetailsImage, ProductsDetailsContent };
