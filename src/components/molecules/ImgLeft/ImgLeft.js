import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'styled-bootstrap-grid';
import {
  ImgLeftContent,
  ImgLeftImage,
  ImgLeftPhoto,
  ImgLeftPicture,
  Wrapper,
} from './ImgLeft.styles';
import { Section } from 'components/atoms/Section/Section.styles';

const ImgLeft = ({ src, alt, content }) => {
  return (
    <Wrapper>
      <Section>
        <Row>
          <Col lg="5">
            <ImgLeftImage>
              <ImgLeftPicture>
                <ImgLeftPhoto src={src} alt={alt} />
              </ImgLeftPicture>
            </ImgLeftImage>
          </Col>
          <Col lg="6" lgOffset="1">
            <ImgLeftContent>
              <p>{content}</p>
            </ImgLeftContent>
          </Col>
        </Row>
      </Section>
    </Wrapper>
  );
};

ImgLeft.propTypes = {};

export default ImgLeft;
