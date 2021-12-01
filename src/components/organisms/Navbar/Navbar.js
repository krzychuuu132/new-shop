import React, { useState } from 'react';
import { ReactComponent as Home } from 'assets/icons/home.svg';
import { ReactComponent as Contact } from 'assets/icons/contact.svg';
import { ReactComponent as Realizations } from 'assets/icons/realizations.svg';
import shop from 'assets/icons/shop.png';
import mainLogo from 'assets/icons/mainLogo.png';

import {
  Navigation,
  Logo,
  LogoMain,
  StyledLink,
  MenuIcon,
  MenuHamburger,
  MenuHamburgerItem,
  Menu,
  MenuNavbar,
  MenuNavbarContainer,
  MenuContent,
  MenuList,
  MenuListItem,
  MenuListLink,
  MenuListLinkIcon,
  MenuLanguages,
  MenuLanguagesItem,
  NavigationWrapper,
} from './Navbar.styles';
import { Container } from 'styled-bootstrap-grid';
import ShoppingCart from 'components/atoms/ShoppingCart/ShoppingCart';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleSetActiveMenu = () => setActiveMenu((prevState) => !prevState);

  return (
    <Navigation>
      <Container>
        <NavigationWrapper>
          <LogoMain>
            <StyledLink to="/">
              <MenuIcon src={mainLogo} alt="ikona menu" />
            </StyledLink>
          </LogoMain>
          <MenuHamburger onClick={handleSetActiveMenu} activeMenu={activeMenu}>
            <MenuHamburgerItem activeMenu={activeMenu} />
          </MenuHamburger>
          <Menu activeMenu={activeMenu}>
            <MenuNavbar>
              <MenuNavbarContainer>
                <MenuLanguages>
                  <MenuLanguagesItem>pl</MenuLanguagesItem>
                  <MenuLanguagesItem>en</MenuLanguagesItem>
                </MenuLanguages>
              </MenuNavbarContainer>
              <Logo>
                <StyledLink to="/">
                  <MenuIcon src={mainLogo} alt="ikona menu" />
                </StyledLink>
              </Logo>
            </MenuNavbar>
            <MenuContent>
              <MenuList>
                <MenuListItem>
                  <MenuListLink to="/about">
                    <MenuListLinkIcon>
                      <Home alt="ikona strony głównej" />
                    </MenuListLinkIcon>
                    o nas
                  </MenuListLink>
                </MenuListItem>

                <MenuListItem>
                  <MenuListLink to="/realizations">
                    <MenuListLinkIcon>
                      <Realizations alt="ikona realizacji" />
                    </MenuListLinkIcon>
                    realizacje
                  </MenuListLink>
                </MenuListItem>

                <MenuListItem>
                  <MenuListLink to="/shop">
                    <MenuListLinkIcon>
                      <img src={shop} alt="ikona sklepu" />
                    </MenuListLinkIcon>
                    sklep
                  </MenuListLink>
                </MenuListItem>

                <MenuListItem>
                  <MenuListLink to="/">
                    <MenuListLinkIcon>
                      <Contact alt="ikona kontaktu" />
                    </MenuListLinkIcon>
                    kontakt
                  </MenuListLink>
                </MenuListItem>
                <ShoppingCart />
              </MenuList>
            </MenuContent>
          </Menu>
        </NavigationWrapper>
      </Container>
    </Navigation>
  );
};

export default Navbar;
