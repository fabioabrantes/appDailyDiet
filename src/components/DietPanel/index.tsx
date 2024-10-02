
import { Feather } from '@expo/vector-icons';

import { formatNumberToString } from "@utils/formatter";

import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Info, Title } from "./styles";

type Props = {
  percent: number;
  position?: "open" | "back";
  icon?: keyof typeof Feather.glyphMap;
  navigateScreen: () => void;
}

export function DietPanel({
  percent,
  navigateScreen,
  icon = "arrow-up-right",
  position = "open"
}: Props) {

  const verifySuccessDiet = (percent >= 50) ? "PRIMARY" : "SECONDARY";

  return (
    <Container ContainerBackgroundColor={verifySuccessDiet} position={position}>
      <ButtonIcon
        icon={icon}
        type={verifySuccessDiet}
        onPress={navigateScreen}
        position={position}
      />

      <Title>{formatNumberToString(percent)}%</Title>

      <Info>das refeições dentro da dieta</Info>
    </Container>
  )

}