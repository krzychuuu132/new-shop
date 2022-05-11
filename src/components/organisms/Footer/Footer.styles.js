import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { MenuIcon } from '../Navbar/Navbar.styles';
import ButtonLink from 'components/atoms/ButtonLink/ButtonLink';
import footerBckgr from 'assets/homepage/footer/footer_bckgr.jpg';

const StyledFooter = styled.footer`
  background-image: url(${footerBckgr});
  background-attachment: fixed;
  padding: 4rem 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1b1b1b;
    opacity: 0.95;
    z-index: 0;
  }

  ${media.xl`
    padding: 8rem 0 10rem 0
  `}
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 3rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grayBckgr};
  position: relative;

  ${media.md`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5rem;
  `}

  ${ButtonLink} {
    align-self: baseline;
  }
`;

const HeadingTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
`;

const Content = styled.div`
  padding-top: 3rem;

  ${MenuIcon} {
    max-width: 15rem;

    ${media.lg`
    max-width: initial;
    margin: 0;
  `}
  }

  ${media.md`
    padding-bottom: 5rem;
  `}
  a {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Logo = styled.div``;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 2rem;
  margin-bottom: 2rem;

  a {
    transition: ${({ theme }) => theme.transition.primary};
  }

  a:hover {
    opacity: 0.5;
  }

  ${media.lg`
  justify-content: flex-start;
  margin-top: 1rem;
  `}
`;

export { Heading, HeadingTitle, Content, Logo, Socials, StyledFooter };
