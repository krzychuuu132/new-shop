import { ButtonText } from '../Button/Button.styles';
import { ButtonLink as StyledButtonLink } from './ButtonLink.styles';

const ButtonLink = (props) => {
  const { children } = props;

  return (
    <StyledButtonLink {...props}>
      <ButtonText>{children}</ButtonText>
    </StyledButtonLink>
  );
};

export default ButtonLink;
