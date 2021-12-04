import { Button as Btn, ButtonText } from './Button.styles';

const Button = (props) => {
  const { children } = props;

  return (
    <Btn {...props}>
      <ButtonText>{children}</ButtonText>
    </Btn>
  );
};

export default Button;
