import {
  media
} from 'styled-bootstrap-grid';
import {
  createGlobalStyle
} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  
 
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
html {
  box-sizing: border-box;
  font-size: 10px;
}

body {
  font-family: "Barlow";
  overflow-x: hidden;
  padding-top: 7.82rem;

  ${media.md`
  padding-top: 10.9rem;
  `}
}


a, button {
    font-family: "Barlow";
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a,
p,
span,
label,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  color: #041e42;
}

section{
  padding: 4rem 0;
  ${media.lg`
    padding: 9rem 0;
  `}
}

p {
  font-size: 1.4rem;
  letter-spacing: 0.08em;
  line-height: 2.5rem;
  font-family: "Barlow";
  margin-bottom: 2rem;
  font-weight: 500;

  ${media.lg`
  font-size: 1.7rem;
    line-height: 2.9rem;
    margin-bottom: 4rem;
  `}

  &:last-of-type {
    margin-bottom: 0;
  }
}
ul {
  padding: 0 2rem;
}
li {
  font-size: 1.4rem;
  letter-spacing: 0.08em;
  line-height: 2.5rem;
  font-family: "Barlow";
  color: #041e42;

  ${media.lg`
   font-size: 1.7rem;
   line-height: 2.9rem;
  `}

}
h1,
.h1 {
  font-family: 'Roboto Slab', serif;
  font-weight: 800;
  letter-spacing: 0.024em;
  font-size: 2.6rem;
  line-height: 2.7rem;
  margin: 0;
  margin-bottom: 4rem;
  text-transform: none;

  ${media.lg`
  line-height: 6.7rem;
  font-size: 4rem;
  margin-bottom: 6rem;
  `}
 
}

h2,
.h2 {
  font-family: "Barlow";
  font-size: 2rem;
  line-height: 2.6rem;
  letter-spacing: 0.072em;
  margin-bottom: 2rem;
  text-transform: uppercase;

  ${media.lg`
    line-height: 3.4rem;
    font-size: 2.6rem;
    margin-bottom: 3rem;
  `}

}

h3,
h4,
h5 {
  font-size: 1.4rem;
  font-family: "Barlow";
  letter-spacing: 0.08em;
  line-height: 1.9rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;

  ${media.lg`
    font-size: 1.7rem;
    line-height: 2.9rem;
    margin-bottom: 2rem;
  `}
}

label,
textarea {
	letter-spacing: 0.08em;
	font-size: 1.7rem;
	display: inline-block;
  font-family: "Barlow";
	pointer-events: none;
	line-height: 2.9rem;

  ${media.md`
		font-size: 1.5rem;
	`}

}

textarea {
	resize: none;
	overflow: visible;
	min-height: 15rem;
	border: none;
	background-color: transparent;
	pointer-events: initial;
}

select {
	color: ${({ theme }) => theme.colors.primary};
	appearance: none;
	width: 100%;
	letter-spacing: 0.08em;
	font-size: 1.7rem;
	display: inline-block;
  font-family: "Barlow";
	color: ${({ theme }) => theme.colors.black};
	line-height: 2.9rem;

  ${media.md`
		font-size: 1.5rem;
	`}
}

input:not([type='checkbox']),
select {
	cursor: text;
	outline: none;
	padding: .5rem 1.5rem;
	width: 100%;
  font-family: "Barlow";
	letter-spacing: 0.06em;
	border: none;
	border: .1rem solid ${({ theme }) => theme.colors.borderColor};
  margin-bottom: 1rem;
  cursor: pointer;

  ${media.sm`
  margin-bottom: 0rem;
	`}
}

`;