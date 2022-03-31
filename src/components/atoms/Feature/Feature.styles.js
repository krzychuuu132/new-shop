import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem 2rem;
  position: relative;

  ${media.xl`
  padding: 8rem 2rem;
  `}

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transition.primary};
    z-index: -1;
    transform: translateX(1rem) translateY(-1rem);
  }

  ${media.xl`
    &:hover::after {
        transform: translate(0);
    }
  `}
`;

const Title = styled.h3`
  text-align: center;
`;

const Icon = styled.img`
  max-width: 3rem;
  margin: 0 auto 2rem auto;
  display: block;
`;

export { Wrapper, Title, Icon };
