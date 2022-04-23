import styled, { css } from 'styled-components';
import arrowIcon from 'assets/icons/arrow.svg';
import { media } from 'styled-bootstrap-grid';

export const ButtonText = styled.span`
  will-change: transform;
  transition: transform 0.3s ease-in-out;
`;

export const ButtonStyles = css`
  background-color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  padding: 1.5rem 3rem;
  letter-spacing: 0.07em;
  font-size: 1.6rem;
  border: none;
  cursor: pointer;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  will-change: transform, opacity;
  color: white;

  span {
    color: white;
  }

  ${media.xl`
    &:hover::after {
      transform: translateX(1rem);
      opacity: 0;
    }

    &:hover ${ButtonText} {
      transform: translateX(-1rem);
    }
  `}

  &::after {
    content: url(${arrowIcon});
    margin-left: 1rem;
    transition: transform 0.3s ease-in-out, opacity 0.4s ease-in-out;
  }
`;

export const Button = styled.button`
  ${ButtonStyles}
`;
