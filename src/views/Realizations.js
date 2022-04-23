import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'styled-bootstrap-grid';

import ImgRight from 'components/molecules/ImgRight/ImgRight';
import ImgRightPicture from 'assets/homepage/slider/about-as.jpg';
import Footer from 'components/organisms/Footer/Footer';
import Breadcrumb from 'components/molecules/Breadcrumb/Breadcrumb';

const Realizations = () => {
  return (
    <>
      <Container>
        <Breadcrumb title="Realizacje" />
        <ImgRight
          src={ImgRightPicture}
          alt="Zdjęcie o naszym slepie"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem reprehenderit eveniet necessitatibus possimus perferendis ipsam, consequuntur delectus laboriosam est rerum, nisi porro odit doloribus repellendus beatae exercitationem ipsum quaerat."
        />
      </Container>
      <Footer />
    </>
  );
};

Realizations.propTypes = {};

export default Realizations;
