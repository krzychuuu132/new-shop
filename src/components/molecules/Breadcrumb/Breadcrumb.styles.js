import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const Wrapper = styled.aside`
  position: relative;
  height: 10rem;
  display: flex;
  align-items: center;

  ${media.lg`
    height: 18rem;
  `}

  h1 {
    color: white;
    position: relative;
    text-transform: uppercase;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0.1rem;
      height: 5rem;
      transform: translateY(6rem);
      background-color: ${({ theme }) => theme.colors.primary};

      ${media.lg`
      height: 8rem; 
      transform: translateY(8rem);
      `}
    }
  }
`;

const Background = styled.div`
  background-image: url('${({ src }) => src} ');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100vw;
  position: absolute;
  margin-left: -50vw;
  left: 50%;
  top: 0;
  overflow-x: hidden;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export { Wrapper, Background };
