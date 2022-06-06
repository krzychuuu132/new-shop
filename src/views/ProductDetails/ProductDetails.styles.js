import Select from 'components/atoms/Select/Select';
import { Link } from 'react-router-dom';
import { media, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${Row} {
    gap: 4rem 0;
    ${media.lg`
    gap: 0;
  `}
  }
`;

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
  grid-template-rows: repeat(3, min-content);
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.grayBckgr};
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);

  h2 {
    margin-bottom: 1rem;
  }

  p:not(.h1) {
    padding: 2rem 0;
  }

  div {
  }

  .select-wrapper {
    min-width: 8rem;

    ${media.md`
    max-width: 12rem;
    `}
  }

  select {
  }

  .h1 {
    line-height: 3rem;
    text-align: center;
  }
`;

const ProductPrice = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto;
  grid-gap: 2rem;

  ${media.md`
  grid-template-columns: repeat(4, auto);
  grid-gap: 2rem;
  justify-content: space-between;
  `}

  ${media.lg`
  grid-template-columns: repeat(3, auto);
  grid-gap: 3rem;

  .h1{
    grid-column 1/4;
    text-align:center;
  }
  `}

  ${media.xxl`
  grid-template-columns: repeat(4, auto);

  .h1{
    grid-column initial;
    text-align:left;
  }
  `}
`;

export { ProductDetailsImage, ProductsDetailsContent, ProductPrice, Wrapper };
