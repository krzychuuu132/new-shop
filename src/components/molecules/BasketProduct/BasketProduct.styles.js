import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem 0;
  border-bottom: 0.1rem solid lightgray;
  display: flex;
  justify-content: space-between;

  &:nth-of-type(1) {
    border-top: 0.1rem solid lightgray;
  }
`;

const ProductContent = styled.figure`
  display: flex;
`;

const ProductImg = styled.img`
  max-width: 10rem;
`;

const ProductTitle = styled.p`
  margin-left: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const ProductQuantity = styled.span`
  display: block;
  text-transform: lowercase;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    background-color: transparent;
    border: none;

    img {
      max-width: 2rem;
      transition: ${({ theme }) => theme.transition.primary};
      backface-visibility: hidden;
      will-change: opacity;

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

const ProductSum = styled.p``;

export {
  Wrapper,
  ProductContent,
  ProductImg,
  ProductTitle,
  ProductQuantity,
  ProductDetails,
  ProductSum,
};
