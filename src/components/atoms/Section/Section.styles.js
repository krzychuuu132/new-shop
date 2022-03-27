import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: ${({ paddingTop }) => (paddingTop ? '4rem' : '0')};
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? '4rem' : '0')};
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 0;
  }

  p,
  h2 {
    z-index: 1;
    position: relative;
    color: white;
  }

  .section-image {
    transition: ${({ theme }) => theme.transition.primary};
  }

  &:hover .section-image {
    transform: translateY(-2rem);
  }

  ${media.lg`
    padding-top: ${({ paddingTop }) => (paddingTop ? '9rem' : '0')};
    padding-bottom: ${({ paddingBottom }) => (paddingBottom ? '9rem' : '0')};
  `}
`;
