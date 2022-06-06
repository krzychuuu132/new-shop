import styled from 'styled-components';

const LoaderWapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.loaderBckgr};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ loading }) => (loading ? 1 : 1)};
  pointer-events: ${({ loading }) => (loading ? 'all' : 'none')};
  transition: ${({ theme }) => theme.transition.primary};
  color: white;
  min-height: 25rem;
  margin: 1rem 0;
`;

export { LoaderWapper };
