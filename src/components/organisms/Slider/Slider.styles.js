import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';

const Article = styled.article`
  margin-top: 8rem;
  position: relative;
  z-index: 1;
  height: calc(100vh - 80px);
  color: white;

  ${media.md`
    height:60vh;
    margin-top: 10rem;
  `}

  ${media.xl`
    height:calc(100vh - 100px);
  `}

  ${media.xxl`
    height: 60rem;
  `}

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.75) 0%, rgba(255, 255, 255, 0) 100%);
    z-index: 1;
  }
`;

const MainSlider = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  position: ab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: none;

  &.active {
    display: block;
  }
`;

const SliderImgWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const SliderBody = styled.div`
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  button {
    margin-top: 2rem;
  }
`;

const SliderTitle = styled.h2``;

const SliderDescription = styled.p``;

const SliderImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SliderIndicatorsWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 5rem;
  transform: translateX(-50%);
  z-index: 2;
`;

const SliderIndicators = styled.div`
  padding: 0 0.3rem;
  border-radius: 50%;
  display: flex;
  justify-self: center;
  width: 12rem;
`;

const SliderIndicatorsBtn = styled.button`
  cursor: pointer;
  border: none;
  flex-grow: 1;
  height: 0.7rem;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 0.1rem;
  transition: all 0.4s;
  margin-right: 1rem;
  opacity: 0.3;

  &.active {
    flex-grow: 2;
    opacity: 1;
  }
`;

export { Article, MainSlider, SliderBody, SliderTitle, SliderDescription, SliderImg, Slide, SliderIndicators, SliderIndicatorsBtn, SliderImgWrapper, SliderIndicatorsWrapper };
