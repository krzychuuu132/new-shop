import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';

const BasketProductsWrapper = styled.div`
  margin-bottom: 2rem;
  button {
    margin-bottom: 2rem;
    margin-left: auto;
    display: block;
    cursor: pointer;
  }
`;

const SummaryWrapper = styled.div`
  button:nth-of-type(1) {
    margin-bottom: 3rem;

    ${media.lg`
    margin-bottom: 6rem;
  `}
  }
`;

const SummaryContent = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
`;

const SummaryTitle = styled.h2`
  margin-top: 2rem;
`;

const BasketLink = styled.button`
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  transition: ${({ theme }) => theme.transition.primary};

  &:hover {
    opacity: 0.5;
  }
`;

export {
  SummaryContent,
  SummaryTitle,
  SummaryWrapper,
  BasketProductsWrapper,
  BasketLink,
};
