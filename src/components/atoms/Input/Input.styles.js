import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  font-size: 1.6rem;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  transition: 0.3s ease-in;
  color: ${({ theme }) => theme.colors.black};
  pointer-events: none;
`;

export const Input = styled.input`
  cursor: text;
  outline: none;
  padding: 1rem;
  width: 100%;
  letter-spacing: 0.06em;
  border: none;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};
  line-height: 2rem;
  font-size: 1.7rem;

  &[type='checkbox'] {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    width: 13px;
    height: 13px;
    margin: 0;
    margin-right: 1px;
    display: block;
    float: left;
    position: relative;
    cursor: pointer;
    margin-right: 0.4rem;
    transform: translateX(3px);
    appearance: none;

    &::after {
      content: '';
      vertical-align: middle;
      text-align: center;
      line-height: 13px;
      position: absolute;
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
      left: 0;
      top: 0;
      font-size: 10px;
      background: #e8e8e8;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.5rem;
      transform: translateX(-3px);
    }

    &:checked::after {
      background: #414141;
      content: '✔';
      color: #fff;
      font-size: 1.4rem;
    }

    & + label {
      position: static;
      pointer-events: all;
      cursor: pointer;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  gap: 1rem 2rem;
  margin-bottom: 0.5rem;

  label {
    margin-top: 0;
  }
`;
