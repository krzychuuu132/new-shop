import React, { useContext } from 'react';
import { MenuListItem, MenuListLink, MenuListLinkIcon } from 'components/organisms/Navbar/Navbar.styles';
import { ReactComponent as UserIcon } from 'assets/icons/user.svg';
import { Wrapper } from './LogInLink.styles';
import { AuthContext } from 'providers/IsAuthProvider';

const LogInLink = () => {
  const { jwt } = useContext(AuthContext);

  return (
    <Wrapper>
      <MenuListItem>
        <MenuListLink to={jwt ? '/moje-konto' : '/zaloguj'}>
          <MenuListLinkIcon>
            <UserIcon alt="ikona kontaktu" />
          </MenuListLinkIcon>
          {jwt ? 'Moje konto' : 'Zaloguj się'}
        </MenuListLink>
      </MenuListItem>
    </Wrapper>
  );
};

export default LogInLink;
