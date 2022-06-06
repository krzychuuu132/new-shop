import styled from 'styled-components';
import { ProductDetails } from 'components/molecules/BasketProduct/BasketProduct.styles';
import { InputWrapper, Label } from 'components/atoms/Input/Input.styles';

const Wrapper = styled.div`
  form {
    gap: 0;
  }
`;

const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  margin-bottom: 4rem;
  ${InputWrapper} {
    display: flex;
    gap: 0 2rem;
    align-items: center;
    padding: 2rem 3rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.radius.primary};
    input {
      width: auto;
    }
  }

  ${Label} {
    position: static;
    pointer-events: all;
    width: 100%;
    font-weight: bold;
  }
`;

const InputTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;

  .error-message {
    transform: translateY(-1rem);
  }
`;

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  ${ProductDetails} {
    justify-content: end;
  }

  p {
    margin-bottom: 1rem;
  }

  button {
    width: fit-content;
    margin: 2rem 0 0 auto;
  }
`;

const SummaryValue = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Wrapper, Fieldset, InputTextWrapper, SummaryWrapper, SummaryValue };
