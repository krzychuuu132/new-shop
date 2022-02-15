import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';

const CategoryLink = styled(NavLink)`
  text-decoration: none;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.grayBckgr};

  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export { CategoryLink };
