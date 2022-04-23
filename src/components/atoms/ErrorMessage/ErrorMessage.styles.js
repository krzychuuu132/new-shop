import styled from 'styled-components';

export const StyledErrorMessage = styled.p`
  && {
    color: red;
    margin-bottom: 0;
    font-size: 1.3rem;
    transform: ${({ isRegister }) => (isRegister ? null : 'translateY(-1.5rem)')};
    text-transform: uppercase;
  }
`;
