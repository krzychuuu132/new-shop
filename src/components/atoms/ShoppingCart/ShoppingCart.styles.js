import { MenuListLinkIcon } from 'components/organisms/Navbar/Navbar.styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  li {
    background-color: ${({ theme }) => theme.colors.grayBckgr};
  }

  ${MenuListLinkIcon} {
    position: relative;

    span {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;

export const CartCount = styled.span`
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  font-size: 1rem;
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
