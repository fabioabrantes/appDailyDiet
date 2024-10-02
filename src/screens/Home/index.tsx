import { useCallback, useEffect, useState } from "react";

import { Alert, SectionList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { DietPanel } from "@components/DietPanel";
import { Button } from "@components/Button";
import { ListMealEmpty } from "@components/ListMealEmpty";
import { MealCard } from "@components/MealCard";

import logoImg from "@assets/Logo.png";
import userImg from "@assets/user.png";
import { calculateMealStats } from "@utils/statistic";

import { MealDetailTypeProps, MealListTypeProps } from "src/@types/navigation";
import { mealsGetAll } from "@storage/meals/mealsGetAll";

import {
  Container,
  HeaderContainer,
  Logo, AvatarWrapper,
  UserAvatar,
  ContenContainer,
  ContentButton,
  TitleContentButton,
  DayHeader
} from './styles';
import { AppError } from "@utils/AppError";


const meals: MealListTypeProps[] = [
  {
    date: '27/08/2024',
    data: [
      { hour: "20:00", meal: "X-tudo", description: "sandwiche gorduroso", isDiet: true },
      { hour: "20:30", meal: "X-tudo", description: "sandwiche gorduroso", isDiet: false },
      { hour: "21:00", meal: "X-tudo", description: "sandwiche gorduroso", isDiet: true }
    ],
  },
  {
    date: '29/08/2024',
    data: [
      { hour: "20:00", meal: "X-tudo", description: "sandwiche gorduroso", isDiet: true },
      { hour: "20:30", meal: "X-tudo", description: "sandwiche gorduroso", isDiet: false },
      { hour: "21:00", meal: "X-tudo", description: "sandwiche gorduroso", isDiet: true }
    ],
  },
  {
    date: '30/08/2024',
    data: [
      { hour: "20:00", meal: "X-tudo", description: "sandwiche gorduroso", isDiet: true },
      { hour: "20:30", meal: "X-tudo", description: "sandwiche gorduroso", isDiet: false },
      { hour: "21:00", meal: "X-tudo", description: "sandwiche gorduroso", isDiet: true }
    ],
  },
  {
    date: '31/08/2024',
    data: [
      { hour: "20:00", meal: "X-tudo", description: "sandwiche gorduroso", isDiet: true },
      { hour: "20:30", meal: "X-tudo", description: "sandwiche gorduroso", isDiet: false },
      { hour: "21:00", meal: "X-tudo", description: "sandwiche gorduroso", isDiet: true }
    ],
  },
]

type StatisticProps = {
  totalMeals: number;
  mealsInDiet: number;
  mealsOutDiet: number;
  percentageInDiet: number;
  bestSequenceInDiet: number;
}


export function Home() {
  const [listMeal, setListMeal] = useState<MealListTypeProps[]>([] as MealListTypeProps[]);
  const [statistic, setStatistic] = useState<StatisticProps>({} as StatisticProps);

  const navigation = useNavigation();

  function handleNavigateRegisterMeal() {
    navigation.navigate('RegisterMeal');
  }

  function handleNavigateDetailsMeal(infoMeal: MealDetailTypeProps) {
    navigation.navigate('DetailsMeal', { meal: infoMeal });
  }

  function handleNavigationToStatistics() {
    navigation.navigate("Statistics", {statistic});
  }

  async function fetchMealsStorage() {
    try {
      const mealsStorage = await mealsGetAll();
      setListMeal(mealsStorage);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Listar refeições", error.message);
      }

      Alert.alert("Listar refeições", "Não foi possível listar as refeições.")
    }
  }

  // Atualiza as estatísticas quando listMeal for atualizado
  useEffect(() => {
    if (listMeal.length > 0) {
      const stats = calculateMealStats(listMeal);
      setStatistic(stats);
    }
  }, [listMeal]); // O useEffect será executado quando listMeal mudar

  useFocusEffect(useCallback(() => {
    fetchMealsStorage()
  }, []));

  return (
    <Container>
      <HeaderContainer>
        <Logo source={logoImg} />

        <AvatarWrapper>
          <UserAvatar source={{ uri: "https://github.com/fabioabrantes.png" }} />
        </AvatarWrapper>
      </HeaderContainer>

      <DietPanel
        percent={statistic?.percentageInDiet ? statistic.percentageInDiet : 0.00}
        position="open"
        navigateScreen={handleNavigationToStatistics}
      />

      <ContenContainer>
        <ContentButton>
          <TitleContentButton>
            Refeições
          </TitleContentButton>

          <Button
            title='Nova refeição'
            icon='plus'
            type='DARK'
            onPress={handleNavigateRegisterMeal}
          />
        </ContentButton>

        <SectionList
          sections={listMeal}
          style={{ height: '50%' }}
          keyExtractor={(item) => item.hour}
          renderItem={({ item, section: { date } }) => (
            <MealCard
              title={item.meal}
              hour={item.hour}
              typeDiet={!item.isDiet ? 'failure' : 'success'}
              onPress={() => handleNavigateDetailsMeal({ date, data: item })}
            />
          )}
          renderSectionHeader={({ section: { date } }) => (<DayHeader> {date}</DayHeader>)}
          ListEmptyComponent={() => (
            <ListMealEmpty
              message='Adicione as refeições diárias'
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </ContenContainer>
    </Container>
  );
}


