import styled from 'styled-components';

const LoaderWapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ loading }) => (loading ? 1 : 0)};
  pointer-events: ${({ loading }) => (loading ? 'all' : 'none')};
  transition: ${({ theme }) => theme.transition.primary};
  color: white;
`;

export { LoaderWapper };
