import { Button as Btn, ButtonText } from './Button.styles';

const Button = ({ children }) => {
  return (
    <Btn>
      <ButtonText>{children}</ButtonText>
    </Btn>
  );
};

export default Button;
