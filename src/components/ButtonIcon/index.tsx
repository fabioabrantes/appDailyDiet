import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, Icon } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap;
  position?: "open" | "back" | "default";
  type?: "PRIMARY" | "SECONDARY" | "DEFAULT"
}

export function ButtonIcon({ icon, type = "DEFAULT", position = "default", ...rest }: Props) {
  return (
    <Container {...rest} position={position}>
      <Icon
        name={icon}
        cor={type}
      />
    </Container>
  );
}