import { useNavigation, useRoute } from "@react-navigation/native";

import { DietPanel } from "@components/DietPanel";
import { StatisticCard } from "@components/StatisticCard";

import { Container, Content, InfoContent, Title } from "./styles";
import { StatisticProps } from "src/@types/navigation";

export function Statistics() {

  const navigation = useNavigation();
  const route = useRoute();
  const { statistic } = route.params as { statistic: StatisticProps };
  console.log(statistic);
  function handleNavigateHome() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <DietPanel
        percent={statistic.percentageInDiet}
        position="back"
        icon="arrow-left"
        navigateScreen={handleNavigateHome}
      />

      <Title>Estatísticas gerais</Title>
      <Content>

        <StatisticCard
          title={statistic.bestSequenceInDiet}
          description="melhor sequência de pratos dentro da dieta"
        />
        <StatisticCard
          title={statistic.totalMeals}
          description="refeições registradas"
        />

        <InfoContent>
          <StatisticCard
            title={statistic.mealsInDiet}
            description="refeições dentro da dieta"
            variantStyle="success"
          />
          <StatisticCard
            title={statistic.mealsOutDiet}
            description="refeições fora da dieta"
            variantStyle="danger"
          />
        </InfoContent>
      </Content>
    </Container>
  );
}