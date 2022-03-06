import { media, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const ProductsWrapper = styled.div`
  position: relative;
  ${Row} {
    grid-gap: 4rem 0;
    ${media.lg`
    grid-gap:  2rem 0;
  `}
  }
`;

const ProductsSection = styled.section``;

export { ProductsWrapper, ProductsSection };
