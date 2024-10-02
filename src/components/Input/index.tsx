import { TextInputProps } from "react-native";

import { Container, InputText, Label } from "./styles";
type InputProps = TextInputProps & {
  label: string;

}

export function Input({ label, ...props }: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>

      <InputText
        {...props}
      />
    </Container>
  )
}