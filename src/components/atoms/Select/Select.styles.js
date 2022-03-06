import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const SelectTag = styled.select``;

const Option = styled.option``;

const Arrow = styled.span`
  position: absolute;
  transition: 0.3s ease-in;
  pointer-events: none;
  width: 0;
  height: 0;
  border-left: 0.7rem solid transparent;
  border-right: 0.7rem solid transparent;
  border-top: 0.7rem solid #041e42;
  margin-left: 2rem;
  right: 2rem;
  top: 45%;
`;

export { Wrapper, SelectTag, Option, Arrow };
