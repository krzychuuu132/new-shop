import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonStyles } from '../Button/Button.styles';

export const ButtonLink = styled(Link)`
  ${ButtonStyles};
  text-decoration: none;
`;
