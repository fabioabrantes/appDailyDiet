import { TouchableOpacityProps } from "react-native";

import { Container, Divider, FoodName, Hour, Indicator } from "./styles";

type MealCardProps = TouchableOpacityProps &{
  title: string;
  hour: string;
  typeDiet?: 'success' | 'failure';
}
export function MealCard({ title, hour, typeDiet = "success", ...rest }: MealCardProps) {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>

      <Divider/>

      <FoodName>{title}</FoodName>
      
      <Indicator variant={typeDiet} />
    </Container>
  )
}