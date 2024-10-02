import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { InputMasked } from "@components/InputMasked";
import { Button } from "@components/Button";
import { ButtonDiet } from "@components/ButtonDiet";
import { Input } from "@components/Input";

import { mealRegister } from "@storage/meals/mealRegister";
import { AppError } from "@utils/AppError";

import {
  Container,
  ContainerForm,
  InfoDiet,
  WrapperHorizontal,
  ContainerButton,
  ContainerDiet
} from "./styles";


export function RegisterMeal() {
  const [diet, setDiet] = useState(false);
  const [nameMeal, setNameMeal] = useState("");
  const [description, setDesctipion] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleRegisterMealInStorage() {
    try {
      //fazer as validações aqui
      
      const newMealByDate = {
        meal: nameMeal,
        description,
        hour: time,
        isDiet: diet
      }

      await mealRegister(date, newMealByDate);
      navigation.navigate('SuccessRegister', { isInDiet: diet });
      console.log(newMealByDate);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message);
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
        console.log(error);
      }
    }

  }
  return (
    <Container>
      <Header navigateBack={handleGoBack} title="Nova Refeição" />
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
          <Button
            title="Cadastrar refeição"
            type="DARK"
            onPress={handleRegisterMealInStorage}
          />
        </ContainerButton>
      </ContainerForm>
    </Container>
  )
}