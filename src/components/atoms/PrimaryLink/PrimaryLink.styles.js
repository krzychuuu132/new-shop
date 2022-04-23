import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  letter-spacing: 0.08em;
  font-size: 1.6rem;
  line-height: 2.5rem;
  transition: ${({ theme }) => theme.transition.primary};
  will-change: opacity;
  display: block;

  ${media.xl`
    line-height: 2.9rem;
    font-size: 1.7rem;

    &:hover{
      opacity: .6;
    }
  `}
`;
