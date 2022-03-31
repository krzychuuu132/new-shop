import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  gap: 2rem 3rem;
  ${media.xl`
  margin-top: 5rem;
  `}

  ${media.sm`
  grid-template-columns: repeat(3,1fr);
  `}
  ${media.lg`
  grid-template-columns: repeat(4,1fr);
  `}
  ${media.xl`
  grid-template-columns: repeat(5,1fr);
  `}
`;

export { Wrapper };
