import React from 'react';
import { MenuListItem, MenuListLink, MenuListLinkIcon } from 'components/organisms/Navbar/Navbar.styles';
import { ReactComponent as ShopCart } from 'assets/icons/shopCart.svg';
import { CartCount, Wrapper } from './ShoppingCart.styles';

const ShoppingCart = () => {
  return (
    <Wrapper>
      <MenuListItem>
        <MenuListLink to="/">
          <MenuListLinkIcon>
            <CartCount>0</CartCount>
            <ShopCart alt="ikona kontaktu" />
          </MenuListLinkIcon>
          Koszyk
        </MenuListLink>
      </MenuListItem>
    </Wrapper>
  );
};

export default ShoppingCart;
