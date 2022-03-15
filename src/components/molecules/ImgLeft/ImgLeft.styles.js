import { Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${Row} {
    gap: 2rem 0;
  }
`;

const ImgLeftImage = styled.div``;

const ImgLeftPicture = styled.picture``;

const ImgLeftPhoto = styled.img`
  border-radius: 0.5rem;
  max-width: 100%;
`;

const ImgLeftContent = styled.div``;

export { ImgLeftImage, ImgLeftPicture, ImgLeftPhoto, ImgLeftContent, Wrapper };
