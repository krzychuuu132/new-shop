import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import { Link } from 'react-router-dom';

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 2;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.borderColor};
  overflow-x: hidden;
`;

const NavigationWrapper = styled.div`
  ${media.md`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

const Logo = styled.div`
  height: 6rem;
  padding: 0rem 4rem;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  img {
    display: block;
    padding: 1rem 0;
    margin: 0 auto;
  }
`;

const LogoMain = styled.div`
  padding: 2rem 0;
  height: initial;
  width: fit-content;

  ${media.md`
    margin-left: 0;
  `}

  img {
    max-width: 10rem;
    margin: initial;
    padding: 0;

    ${media.md`
    max-width: 15rem;
  `}
  }
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`;

const MenuIcon = styled.img`
  display: block;
  padding: 1rem 0;
  margin: 0 auto;
`;

const MenuHamburger = styled.button`
  position: fixed;
  right: 3rem;
  top: ${({ activeMenu }) => (activeMenu ? '2rem' : '3rem')};
  border: none;
  width: 2.3rem;
  height: 1.9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  cursor: pointer;
  z-index: 3;
  background-color: transparent;
  transition: ${({ theme }) => theme.transition.primary};

  ${media.md`
    display: none;
  `}

  &::before,
  &::after {
    display: block;
    width: 100%;
    height: 0.3rem;
    background-color: ${({ theme }) => theme.colors.black};
    transition: opacity 0.4s ease-in-out, 0.5s transform ease-in-out;
    content: '';
    will-change: transform;
  }

  &::before {
    transform: ${({ activeMenu }) => (activeMenu ? 'translateY(0.8rem) rotate(45deg)' : '0')};
  }

  &::after {
    transform: ${({ activeMenu }) => (activeMenu ? 'translateY(-0.8rem) rotate(-45deg)' : '0')};
  }
`;

const MenuHamburgerItem = styled.span`
  display: block;
  width: 100%;
  height: 0.3rem;
  background-color: ${({ theme }) => theme.colors.black};
  transition: opacity 0.4s ease-in-out, 0.5s transform ease-in-out;
  opacity: ${({ activeMenu }) => (activeMenu ? '0' : '1')};
`;

const Menu = styled.div`
  transform: ${({ activeMenu }) => (activeMenu ? 'translateX(0)' : 'translateX(105vw)')};
  will-change: transform;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  overflow-y: auto;
  transition: ${({ theme }) => theme.transition.primary};
  background-color: white;
  ${media.md`
    transform: translateX(0);
    position: initial;
    height: initial;
    width: initial;
    overflow: initial;
  `}
`;

const MenuNavbar = styled.div`
  background-color: ${({ theme }) => theme.colors.grayBckgr};
  height: 15rem;

  ${media.md`
    display: none;
  `}
`;

const MenuNavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const MenuContent = styled.div`
  height: calc(100vh - 15rem);
  display: flex;
  flex-direction: column;

  ${media.md`
    height: initial;
  `}
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  background-color: white;

  ${media.md`
    display: flex;
  `}
`;

const MenuListItem = styled.li`
  &:nth-last-of-type(1) {
    .menu__list-link {
      margin-bottom: 0;

      ${media.md`
        padding-right: 0;
      `}
    }
  }
`;

const MenuListLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;
  display: block;
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.black};
  transition: 0.3s ease-in;

  ${media.md`
    flex-direction: column;
    padding: 2rem;
    border:none;

    &:hover{
      color: ${({ theme }) => theme.colors.primary};
    }

    &:hover svg path{
      fill: ${({ theme }) => theme.colors.primary}
    } 
    
    &:hover img{
      fill: ${({ theme }) => theme.colors.primary}
    } 
  `}
`;

const MenuListLinkIcon = styled.div`
  padding: 2rem;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};

  ${media.md`
    padding: 1rem;
    margin-right: 0;
    background-color: transparent;
  `}

  img {
    ${media.md`
      filter: brightness(0);
    `}
  }

  img,
  svg {
    width: 2.2rem;
    ${media.md`
      color: black;
    `}
  }

  svg {
    height: 2.2rem;

    path {
      transition: 0.3s ease-in;
      ${media.md`
        fill: black;
      `}
    }
  }
`;

const MenuLanguages = styled.div``;

const MenuLanguagesItem = styled.button`
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 0 1rem;
  margin-top: 1rem;

  &:nth-of-type(1) {
    padding-left: 0;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 0.2rem;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.textColor};
    }
  }
`;

export {
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
};
