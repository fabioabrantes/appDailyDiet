import { TextInputMaskProps } from 'react-native-masked-text';
import { Container, Header, Input } from './styles';

type Props = TextInputMaskProps & {
  title: string;
}

export function InputMasked({ title, ...rest }: Props){
  return (
    <Container>
      <Header>
        {title}
      </Header>
      <Input {...rest} />
    </Container>
  )
}
