import { useState } from "react";
import { Modal } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Button } from "@components/Button";

import { MealDetailTypeProps } from "src/@types/navigation";

import {
  Container,
  Content,
  ContainerButton,
  ContainerInfoMeal,
  Name,
  Description,
  ContainerNameDescription,
  ContainerTime,
  LabelTime,
  DateHour,
  ContainerIndicator,
  PointIndicator,
  TextIndicator,
  ModalContainer,
  ModalWrapper,
  ModalTitle,
  ModalButtonInteraction,
} from "./styles";



export function DetailsMeal() {
  const [modalVisibility, setModalVisibility] = useState(false);


  const navigation = useNavigation();

  const route = useRoute();
  const { meal } = route.params as { meal: MealDetailTypeProps };


  function handleNavigateHome() {
    navigation.navigate('Home');
  }

  function handleNavigateEditMeal() {
    navigation.navigate('EditMeal', { meal });
  }

  return (
    <Container>
      <Header
        navigateBack={handleNavigateHome}
        title="Refeição"
        variantStyle="success"
      />
      <Content>
        <ContainerInfoMeal>
          <ContainerNameDescription>
            <Name>{meal.date}</Name>

            <Description>{meal.data.description}</Description>
          </ContainerNameDescription>

          <ContainerTime>
            <LabelTime>Data e hora</LabelTime>
            <DateHour>{meal.date} às {meal.data.hour}</DateHour>
          </ContainerTime>

          <ContainerIndicator>
            <PointIndicator isDiet={meal.data.isDiet} />
            {meal.data.isDiet ?
              (<TextIndicator>está na dieta</TextIndicator>)
              :
              (<TextIndicator>fora da dieta</TextIndicator>)
            }
          </ContainerIndicator>

        </ContainerInfoMeal>

        <ContainerButton>
          <Button
            icon="edit"
            title="Editar refeição"
            type="DARK"
            onPress={handleNavigateEditMeal}
          />
          <Button
            icon="delete"
            title="Excluir refeição"
            type="LIGHT"
            onPress={() => setModalVisibility(true)}
          />
        </ContainerButton>
      </Content>

      <Modal
        visible={modalVisibility}
        transparent
        statusBarTranslucent
        animationType="fade"
      >
        <ModalContainer>
          <ModalWrapper>
            <ModalTitle>Deseja realmente excluir o registro da refeição?</ModalTitle>
            <ModalButtonInteraction>
              <Button
                title="Cancelar"
                type="LIGHT"
                onPress={() => setModalVisibility(false)}
              />

              <Button
                title="Sim, excluir"
                type="DARK"
                onPress={() => { }}
              />
            </ModalButtonInteraction>
          </ModalWrapper>
        </ModalContainer>
      </Modal>
    </Container>
  )
}