import styled from 'styled-components';
import { Button } from '../Button/Button.styles';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;

  ${Button} {
    width: fit-content;
    margin-top: 2rem;
  }
`;
