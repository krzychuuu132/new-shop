import { media, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: ${({ paddingTop }) => (paddingTop ? '4rem' : '0')};
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? '4rem' : '0')};
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  color: white;

  &::after {
    content: '';
    display: ${({ darkSection }) => (darkSection ? 'block' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    z-index: -2;
  }

  &::before {
    content: ${({ backgroundImage }) => (backgroundImage ? '' : null)};
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
    color: ${({ backgroundImage }) => (backgroundImage ? '#fff' : '#041e42')};
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

  ${Row} {
    gap: 4rem 0;
  }
`;
