import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'components/organisms/Slider/Slider';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import ImgLeft from 'components/molecules/ImgLeft/ImgLeft';
import ImgLeftPicture from 'assets/homepage/slider/about-as.jpg';
import { Container } from 'styled-bootstrap-grid';
import ImgRight from 'components/molecules/ImgRight/ImgRight';
import Footer from 'components/organisms/Footer/Footer';
import Offer from 'components/organisms/Offer/Offer';

import OfferPicture from 'assets/homepage/offer/offer_image.png';
import OfferBackround from 'assets/homepage/offer/offer_background.jpg';
import Features from 'components/organisms/Features/Features';

const Homepage = (props) => {
  return (
    <MainTemplate>
      <Slider />
      <Container>
        <ImgLeft
          src={ImgLeftPicture}
          alt="Zdjęcie o naszym slepie"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem reprehenderit eveniet necessitatibus possimus perferendis ipsam, consequuntur delectus laboriosam est rerum, nisi porro odit doloribus repellendus beatae exercitationem ipsum quaerat."
        />
      </Container>
      <Features />

      <Container>
        <ImgRight
          src={ImgLeftPicture}
          alt="Zdjęcie o naszym slepie"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem reprehenderit eveniet necessitatibus possimus perferendis ipsam, consequuntur delectus laboriosam est rerum, nisi porro odit doloribus repellendus beatae exercitationem ipsum quaerat."
        />
      </Container>
      <Offer picture={OfferPicture} backgroundImage={OfferBackround} />
      <Footer />
    </MainTemplate>
  );
};

Homepage.propTypes = {};

export default Homepage;
