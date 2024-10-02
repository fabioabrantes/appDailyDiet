import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Title } from "./styles";

type HeaderProps = {
  title: string;
  variantStyle?: "default" | "success" | "danger";
  navigateBack: () => void;
}

export function Header({ title,navigateBack, variantStyle = "default" }: HeaderProps) {


  return (
    <Container variant={variantStyle}>
      <ButtonIcon icon="arrow-left" onPress={navigateBack} />

      <Title>{title}</Title>
    </Container>
  )
}