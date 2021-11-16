import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
 
  
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
}


a, button {
    font-family: "Barlow";
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "Barlow";
  src: url("../../fonts/Barlow-black.ttf") format("ttf");
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
  color: $text-color;
}

p {
  font-size: 1.4rem;
  letter-spacing: 0.08em;
  line-height: 2.5rem;
  font-family: $primary-font;
  margin-bottom: 2rem;

  @include media-breakpoint-up(lg) {
    font-size: 1.7rem;
    line-height: 2.9rem;
    margin-bottom: 4rem;
  }

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
  font-family: $primary-font;
  color: $text-color;

  @include media-breakpoint-up(lg) {
    font-size: 1.7rem;
    line-height: 2.9rem;
  }
}
h1,
.h1 {
  font-family: $secondary-font;
  font-weight: 800;
  letter-spacing: 0.024em;
  font-size: 2.6rem;
  line-height: 2.7rem;
  margin: 0;
  text-transform: none;
  @include media-breakpoint-up(lg) {
    line-height: 6.7rem;
    font-size: 5.6rem;
  }
}

h2,
.h2 {
  font-size: 2rem;
  line-height: 2.6rem;
  font-family: $primary-font;
  letter-spacing: 0.072em;
  margin-bottom: 2rem;
  text-transform: uppercase;

  @include media-breakpoint-up(lg) {
    line-height: 3.4rem;
    font-size: 2.6rem;
    margin-bottom: 3rem;
  }
}
.filter-heading {
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.2rem;
    width: 9rem;
    background: $secondary;
  }
}
h3,
h4,
h5 {
  font-size: 1.4rem;
  font-family: $primary-font;
  letter-spacing: 0.08em;
  line-height: 1.9rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;

  @include media-breakpoint-up(lg) {
    font-size: 1.7rem;
    line-height: 2.9rem;
    margin-bottom: 2rem;
  }
}

`;
