import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'styled-bootstrap-grid';
import {
  ImgLeftContent,
  ImgLeftImage,
  ImgLeftPhoto,
  ImgLeftPicture,
  Wrapper,
} from '../ImgLeft/ImgLeft.styles';
import { Section } from 'components/atoms/Section/Section.styles';

const ImgRight = ({ src, alt, content }) => {
  return (
    <Wrapper>
      <Section>
        <Row>
          <Col lg="5">
            <ImgLeftContent>
              <p>{content}</p>
            </ImgLeftContent>
          </Col>
          <Col lg="6" lgOffset="1">
            <ImgLeftImage>
              <ImgLeftPicture>
                <ImgLeftPhoto src={src} alt={alt} />
              </ImgLeftPicture>
            </ImgLeftImage>
          </Col>
        </Row>
      </Section>
    </Wrapper>
  );
};

ImgRight.propTypes = {};

export default ImgRight;
