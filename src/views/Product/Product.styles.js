import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductFigure = styled.figure``;

const ProductPicture = styled.picture`
  display: block;
  position: relative;
  cursor: pointer;
  min-height: 30rem;
`;

const ProductImg = styled.img`
  display: block;
  width: 100%;
  max-height: 30rem;
  object-fit: cover;
`;

const ProductFigCaption = styled.figcaption``;

const ProductText = styled.p`
  font-weight: 600;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const ProductDescription = styled.div`
  background-color: ${({ theme }) => theme.colors.grayBckgr};
  padding: 1rem 1rem 5rem 1rem;
  margin-top: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.4rem;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0;
    transition: ${({ theme }) => theme.transition.primary};
  }
`;

const ProductLinkWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%) translateY(1rem);
  opacity: 0;
  transition: ${({ theme }) => theme.transition.primary};

  a {
    padding: 2rem;
  }
`;

const ProductWrapper = styled.div`
  &:hover ${ProductLinkWrapper} {
    transform: translateX(-50%) translateY(0rem);
    opacity: 1;
  }

  &:hover ${ProductDescription}::after {
    opacity: 1;
  }
`;

const ProductLink = styled(Link)`
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.8rem;
`;

export {
  ProductWrapper,
  ProductFigure,
  ProductPicture,
  ProductImg,
  ProductFigCaption,
  ProductDescription,
  ProductText,
  ProductLinkWrapper,
  ProductLink,
};
