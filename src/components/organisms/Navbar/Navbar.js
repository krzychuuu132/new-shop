import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
} from './Navbar.styles';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  console.log(activeMenu);

  return (
    <Navigation>
      <LogoMain>
        <Link href="/" prefetch={false}>
          <StyledLink>
            <Image src="/images/homepage/main-logo.png" alt="Picture of the author" width={199} height={76} />
          </StyledLink>
        </Link>
      </LogoMain>
      <MenuHamburger onClick={() => setActiveMenu(!activeMenu)} activeMenu={activeMenu}>
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
            <Link href="/" prefetch={false}>
              <StyledLink href={'#'}>
                <Image src="/images/homepage/main-logo.png" alt="Picture of the author" width={199} height={76} />
              </StyledLink>
            </Link>
          </Logo>
        </MenuNavbar>
        <MenuContent>
          <MenuList>
            <MenuListItem>
              <MenuListLink>
                <MenuListLinkIcon>
                  <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px">
                    <path
                      fill="#FFF"
                      d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"
                    />
                  </svg>
                </MenuListLinkIcon>
                o nas
              </MenuListLink>
            </MenuListItem>

            <MenuListItem>
              <MenuListLink>
                <MenuListLinkIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" id="XMLID_323_" width="20px" height="20px" viewBox="0 0 47.469 47.469">
                    <g id="XMLID_1291_">
                      <path
                        id="XMLID_1351_"
                        d="M46.541,0H9.086a.927.927,0,0,0-.927.927V5.006H5.006a.927.927,0,0,0-.927.927V10.94H.927A.927.927,0,0,0,0,11.867V42.462a5.012,5.012,0,0,0,5.006,5.006H42.462a5.012,5.012,0,0,0,5.006-5.006V.927A.927.927,0,0,0,46.541,0Zm-.927,42.462a3.156,3.156,0,0,1-3.152,3.152H8.892a4.982,4.982,0,0,0,1.121-3.152V29.946a.927.927,0,1,0-1.854,0V42.462a3.152,3.152,0,0,1-6.3,0V12.794H4.079V41.535a.927.927,0,1,0,1.854,0V6.861H8.159V21.6a.927.927,0,0,0,1.854,0V1.854h35.6Z"
                        fill="#FFF"
                      />
                      <path
                        id="XMLID_1376_"
                        d="M136.927,74.529h28.555a.927.927,0,0,0,.927-.927V66.927a.927.927,0,0,0-.927-.927H136.927a.927.927,0,0,0-.927.927V73.6A.927.927,0,0,0,136.927,74.529Zm.927-6.675h26.7v4.821h-26.7Z"
                        transform="translate(-123.391 -59.881)"
                        fill="#FFF"
                      />
                      <path
                        id="XMLID_1459_"
                        d="M136.927,205.655H151.2a.927.927,0,0,0,.927-.927v-17.8A.927.927,0,0,0,151.2,186H136.927a.927.927,0,0,0-.927.927v17.8A.927.927,0,0,0,136.927,205.655Zm.927-17.8h12.423V203.8H137.854Z"
                        transform="translate(-123.391 -168.756)"
                        fill="#FFF"
                      />
                      <path
                        id="XMLID_1460_"
                        d="M348.755,186h-9.827a.927.927,0,0,0,0,1.854h9.827a.927.927,0,0,0,0-1.854Z"
                        transform="translate(-306.663 -168.756)"
                        fill="#FFF"
                      />
                      <path
                        id="XMLID_1476_"
                        d="M348.755,234h-9.827a.927.927,0,1,0,0,1.854h9.827a.927.927,0,1,0,0-1.854Z"
                        transform="translate(-306.663 -212.305)"
                        fill="#FFF"
                      />
                      <path
                        id="XMLID_1533_"
                        d="M348.755,282h-9.827a.927.927,0,0,0,0,1.854h9.827a.927.927,0,0,0,0-1.854Z"
                        transform="translate(-306.663 -255.855)"
                        fill="#FFF"
                      />
                      <path
                        id="XMLID_1535_"
                        d="M348.755,330h-9.827a.927.927,0,0,0,0,1.854h9.827a.927.927,0,0,0,0-1.854Z"
                        transform="translate(-306.663 -299.405)"
                        fill="#FFF"
                      />
                      <path
                        id="XMLID_1545_"
                        d="M348.755,378h-9.827a.927.927,0,0,0,0,1.854h9.827a.927.927,0,0,0,0-1.854Z"
                        transform="translate(-306.663 -342.955)"
                        fill="#FFF"
                      />
                      <path
                        id="XMLID_1550_"
                        d="M136.927,427.854h28.555a.927.927,0,0,0,0-1.854H136.927a.927.927,0,0,0,0,1.854Z"
                        transform="translate(-123.391 -386.505)"
                        fill="#FFF"
                      />
                      <path
                        id="XMLID_1572_"
                        d="M89.427,268a.928.928,0,1,0,.655.272A.934.934,0,0,0,89.427,268Z"
                        transform="translate(-80.295 -243.153)"
                        fill="#FFF"
                      />
                    </g>
                  </svg>
                </MenuListLinkIcon>
                realizacje
              </MenuListLink>
            </MenuListItem>

            <MenuListItem>
              <MenuListLink>
                <MenuListLinkIcon>
                  <img src="./images/homepage/icons/shop.png" alt="ikona sklepu" />
                </MenuListLinkIcon>
                sklep
              </MenuListLink>
            </MenuListItem>

            <MenuListItem>
              <MenuListLink>
                <MenuListLinkIcon>
                  <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px">
                    <path
                      fill="#FFF"
                      d="M 13 4 C 8.038 4 4 8.037 4 13 L 4 37 C 4 41.963 8.038 46 13 46 L 37 46 C 37.338 46 37.671 45.978406 38 45.941406 L 38 4.0585938 C 37.671 4.0215938 37.338 4 37 4 L 13 4 z M 40 4.5253906 L 40 14 L 46 14 L 46 13 C 46 9.09 43.49 5.7643906 40 4.5253906 z M 22 12 C 29.168 12 35 17.832 35 25 C 35 32.168 29.168 38 22 38 C 14.832 38 9 32.168 9 25 C 9 17.832 14.832 12 22 12 z M 22 14 C 15.935 14 11 18.935 11 25 C 11 27.814 12.071406 30.377219 13.816406 32.324219 C 15.889406 30.225219 18.852 29 22 29 C 25.14 29 28.1135 30.222312 30.1875 32.320312 C 31.9295 30.373313 33 27.812 33 25 C 33 18.935 28.065 14 22 14 z M 40 16 L 40 24 L 46 24 L 46 16 L 40 16 z M 22 18.5 C 24.481 18.5 26.5 20.519 26.5 23 C 26.5 25.481 24.481 27.5 22 27.5 C 19.519 27.5 17.5 25.481 17.5 23 C 17.5 20.519 19.519 18.5 22 18.5 z M 40 26 L 40 34 L 46 34 L 46 26 L 40 26 z M 40 36 L 40 45.474609 C 43.49 44.235609 46 40.91 46 37 L 46 36 L 40 36 z"
                    />
                  </svg>
                </MenuListLinkIcon>
                kontakt
              </MenuListLink>
            </MenuListItem>
          </MenuList>
        </MenuContent>
      </Menu>
    </Navigation>
  );
};

export default Navbar;
