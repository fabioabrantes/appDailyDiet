import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title } from './styles';

type ButtonDietProps = TouchableOpacityProps & {
  title: string;
  type: 'PRIMARY' | 'SECONDARY';
  isActive?: boolean;
}

export function ButtonDiet({ title, type, isActive=false, ...rest }: ButtonDietProps) {
  return (
    <Container type={type} {...rest} isActive={isActive}>
      <Icon type={type} />

      <Title>
        {title}
      </Title>
    </Container>
  )
}
