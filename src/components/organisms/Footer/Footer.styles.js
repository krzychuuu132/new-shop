import ButtonLink from 'components/atoms/ButtonLink/ButtonLink';
import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { MenuIcon } from '../Navbar/Navbar.styles';

const StyledFooter = styled.footer`
  padding: 4rem 0;
  background: linear-gradient(
    225.52deg,
    #271a00 0.45%,
    rgba(0, 0, 0, 0.9) 45.25%
  );

  ${media.xl`
    padding: 8rem 0 15rem 0
  `}
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 3rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grayBckgr};

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
