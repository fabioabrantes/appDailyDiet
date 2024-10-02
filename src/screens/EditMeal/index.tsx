import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Header } from "@components/Header";
import { MealDetailTypeProps } from "src/@types/navigation";

import {
  Container,
  ContainerForm,
  InfoDiet,
  WrapperHorizontal,
  ContainerButton,
  ContainerDiet
} from "./styles";
import { Input } from "@components/Input";
import { InputMasked } from "@components/InputMasked";
import { Button } from "@components/Button";
import { ButtonDiet } from "@components/ButtonDiet";

export function EditMeal() {
  const route = useRoute();
  const { meal } = route.params as { meal: MealDetailTypeProps }

  const [diet, setDiet] = useState(meal.data.isDiet);
  const [nameMeal, setNameMeal] = useState(meal.data.meal);
  const [description, setDesctipion] = useState(meal.data.description);
  const [date, setDate] = useState(meal.date);
  const [time, setTime] = useState(meal.data.hour);

  const navigation = useNavigation();



  function handleGoBackToDetailsMeal() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header navigateBack={handleGoBackToDetailsMeal} title="Editar Refeição" />
      <ContainerForm>
        <Input
          label="Nome"
          value={nameMeal}
          onChangeText={setNameMeal}
        />

        <Input
          label="Descrição"
          multiline
          style={{ height: 120 }}
          textAlignVertical="top"
          value={description}
          onChangeText={setDesctipion}
        />

        <WrapperHorizontal>
          <InputMasked
            title={'Data'}
            type='datetime'
            options={{ format: 'DD/MM/YYYY' }}
            value={date}
            onChangeText={setDate}
          />
          <InputMasked
            title={'Hora'}
            type='datetime'
            options={{ format: 'HH:mm' }}
            value={time}
            onChangeText={setTime}
          />
        </WrapperHorizontal>

        <ContainerDiet>
          <InfoDiet> Está dentro da dieta? </InfoDiet>

          <WrapperHorizontal>
            <ButtonDiet
              type="PRIMARY"
              title="Sim"
              isActive={diet}
              onPress={() => setDiet(true)}
            />

            <ButtonDiet
              type="SECONDARY"
              title="Não"
              isActive={!diet}
              onPress={() => setDiet(false)}
            />
          </WrapperHorizontal>
        </ContainerDiet>

        <ContainerButton>
          <Button title="Salvar alterações" type="DARK" />
        </ContainerButton>
      </ContainerForm>
    </Container>
  )
}