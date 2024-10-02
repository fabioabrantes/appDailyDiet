import { TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Container, Icon, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  icon?: keyof typeof AntDesign.glyphMap;
  type: 'DARK' | 'LIGHT';
}

export function Button({ title, icon, type, ...rest }: Props) {
  return (
    <Container type={type} {...rest} >
      {icon &&
        <Icon
          type={type}
          name={icon}
        />
      }

      <Title type={type}> {title}</Title>
    </Container>
  );
}