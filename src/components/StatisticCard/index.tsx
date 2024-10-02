import { Container, Description, Title } from "./styles";

type StatisticCardProps = {
  variantStyle?: "default" | "success" | "danger";
  title: number;
  description: string;
}
export function StatisticCard({ description, title, variantStyle = "default" }: StatisticCardProps) {
  return (
    <Container variant={variantStyle}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}