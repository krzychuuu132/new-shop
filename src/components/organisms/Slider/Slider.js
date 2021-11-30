import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { Article, MainSlider, Slide, SliderImg, SliderImgWrapper, SliderIndicators, SliderIndicatorsBtn, SliderBody, SliderIndicatorsWrapper, SliderTitle, SliderDescription } from './Slider.styles';

import sliderPicture from 'assets/homepage/slider/slider-one.jpg';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import Button from 'components/atoms/Button';

const sliderData = [
  {
    id: 0,
    title: 'lorem ipsum',
    subtitle: 'subtitle',
    description:
      ' Fusce ac augue eu mi tristique mattis sed quis ex. Nullam id urna eu eros venenatis tempor ac sagittis arcu. Ut eget pulvinar ante. Proin non sem faucibus, ullamcorper est id, ornare dolor. Aliquam nisl enim, semper et posuere sit amet, tristique ac nisi. Sed ultricies urna libero, eu porttitor quam aliquet non. Etiam non scelerisque sapien. Aliquam finibus sodales varius. Aenean viverra felis ullamcorper magna rutrum, et rutrum odio accumsan.',
    image: sliderPicture,
  },
  {
    id: 1,
    title: 'lorem ipsum ipsum',
    subtitle: 'subtitle',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod hendrerit est. Fusce ac augue eu mi tristique mattis sed quis ex. Nullam id urna eu eros venenatis tempor ac sagittis arcu. Ut eget pulvinar ante. Proin non sem faucibus, ullamcorper est id, ornare dolor. Aliquam nisl enim, semper et posuere sit amet, tristique ac nisi. Sed ultricies urna libero, eu porttitor quam aliquet non. Etiam non scelerisque sapien. Aliquam finibus sodales varius. Aenean viverra felis ullamcorper magna rutrum, et rutrum odio accumsan.',
    image: sliderPicture,
  },
  {
    id: 2,
    title: 'lorem ipsum ipsum ipsum',
    subtitle: 'subtitle',
    description:
      ' consectetur adipiscing elit. Fusce euismod hendrerit est. Fusce ac augue eu mi tristique mattis sed quis ex. Nullam id urna eu eros venenatis tempor ac sagittis arcu. Ut eget pulvinar ante. Proin non sem faucibus, ullamcorper est id, ornare dolor. Aliquam nisl enim, semper et posuere sit amet, tristique ac nisi. Sed ultricies urna libero, eu porttitor quam aliquet non. Etiam non scelerisque sapien. Aliquam finibus sodales varius. Aenean viverra felis ullamcorper magna rutrum, et rutrum odio accumsan.',
    image: sliderPicture,
  },
];

const animateSlider = (wrapper) => {
  const { current } = wrapper;

  const activeImg = current.querySelectorAll('.active img');
  const activeText = current.querySelectorAll('.active p');
  const activeTitle = current.querySelectorAll('.active h2');
  const activeButton = current.querySelectorAll('.active button');
  console.log(activeImg);
  gsap.fromTo(activeImg, { opacity: 0 }, { opacity: 1, duration: 3, ease: 'ease-in-out' });
  gsap.fromTo([activeText, activeTitle], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'ease-in-out' });
  gsap.fromTo(activeButton, { y: 30 }, { y: 0, duration: 0.6, ease: 'ease-in-out' });
};

const changeSlide = (value, sliderData) => {
  if (value >= 2) return (value = 0);
  else if (value < 0) return (value = sliderData.length - 1);
  return ++value;
};

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderWrapper = useRef(null);

  useEffect(() => {
    animateSlider(sliderWrapper);
    const interval = setInterval(() => {
      setActiveSlide((prev) => changeSlide(prev, sliderData));
      animateSlider(sliderWrapper);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  //const handleNextSlide = () => setActiveSlide((prevSlide) => ++prevSlide);

  //const handlePreviousSlide = () => setActiveSlide((prevSlide) => --prevSlide);

  const handleSetSlide = async (index) => {
    setTimeout(() => animateSlider(sliderWrapper), 10);
    setActiveSlide(index);
  };

  return (
    <Article>
      <MainSlider ref={sliderWrapper}>
        <SliderIndicatorsWrapper>
          <SliderIndicators>
            {sliderData.map(({ id }, index) => (
              <SliderIndicatorsBtn key={id} className={activeSlide === index ? 'active' : null} key={id} onClick={() => handleSetSlide(index)} />
            ))}
          </SliderIndicators>
        </SliderIndicatorsWrapper>

        {sliderData.map(({ image, description, title, id }, index) => (
          <Slide className={activeSlide === index ? 'active' : null} key={id}>
            <SliderImgWrapper>
              <SliderImg src={image} alt="zdjęcie slidera" />
            </SliderImgWrapper>

            <SliderBody>
              <Container>
                <Row>
                  <Col col={12}>
                    <SliderTitle>{title}</SliderTitle>
                    <SliderDescription>{description}</SliderDescription>
                    <Button>Poznaj naszą ofertę</Button>
                  </Col>
                </Row>
              </Container>
            </SliderBody>
          </Slide>
        ))}
      </MainSlider>
    </Article>
  );
};

export default Slider;
