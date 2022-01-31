import React, { useEffect, useRef } from 'react';
import {
  MenuListItem,
  MenuListLink,
  MenuListLinkIcon,
} from 'components/organisms/Navbar/Navbar.styles';
import { ReactComponent as ShopCart } from 'assets/icons/shopCart.svg';
import { CartCount, Wrapper } from './ShoppingCart.styles';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const shopData = useSelector((state) => state.shopActivitiesReducer);
  const shoppingCardRef = useRef(null);

  useEffect(() => {
    if (shopData.basketProducts) {
      const shoppingCardLength = shopData.basketProducts.length;
      shoppingCardRef.current.innerText = shoppingCardLength;
    }
  }, [shopData]);
  return (
    <Wrapper>
      <MenuListItem>
        <MenuListLink to="/koszyk">
          <MenuListLinkIcon>
            <CartCount ref={shoppingCardRef}>0</CartCount>
            <ShopCart alt="ikona kontaktu" />
          </MenuListLinkIcon>
          Koszyk
        </MenuListLink>
      </MenuListItem>
    </Wrapper>
  );
};

export default ShoppingCart;
