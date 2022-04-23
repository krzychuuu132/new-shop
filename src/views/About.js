import React from 'react';
import { Container } from 'styled-bootstrap-grid';

import ImgRight from 'components/molecules/ImgRight/ImgRight';
import ImgRightPicture from 'assets/homepage/slider/about-as.jpg';
import Footer from 'components/organisms/Footer/Footer';
import Breadcrumb from 'components/molecules/Breadcrumb/Breadcrumb';

const About = () => {
  return (
    <>
      <Container>
        <Breadcrumb title="o nas" />
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

export default About;
