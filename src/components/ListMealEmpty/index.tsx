import { Container, Title } from "./styles";

type ListMealEmptyProps = {
  message: string;
}

export function ListMealEmpty({message}:ListMealEmptyProps){
  return (
    <Container>
      <Title>
        {message}
      </Title>
    </Container>
  )
}