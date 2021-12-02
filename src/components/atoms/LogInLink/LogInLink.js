import React from 'react';
import { MenuListItem, MenuListLink, MenuListLinkIcon } from 'components/organisms/Navbar/Navbar.styles';
import { ReactComponent as UserIcon } from 'assets/icons/user.svg';
import { Wrapper } from './LogInLink.styles';

const LogInLink = () => {
  return (
    <Wrapper>
      <MenuListItem>
        <MenuListLink to="/">
          <MenuListLinkIcon>
            <UserIcon alt="ikona kontaktu" />
          </MenuListLinkIcon>
          Zaloguj się
        </MenuListLink>
      </MenuListItem>
    </Wrapper>
  );
};

export default LogInLink;
