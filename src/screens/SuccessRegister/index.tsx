import { Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@components/Button";

import imgCommemoration from "../../assets/happy.png";
import imgSadness from '../../assets/sadness.png';

import { Container, ContainerButton, ContainerInfo, Description, Strong, Title } from "./styles";



export function SuccessRegister() {

  const navigation = useNavigation();

  const route = useRoute();
  const { isInDiet } = route.params as { isInDiet: boolean };

  function handleNavigateHome() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      {isInDiet ? (
        <>
          <ContainerInfo>
            <Title isDiet={isInDiet}>Continue assim!</Title>

            <Description>Você continua <Strong>dentro da dieta</Strong>. Muito bem!</Description>
          </ContainerInfo>

          <Image
            source={imgCommemoration}
            style={{ width: 224, height: 288 }}
          />
        </>
      ) : (
        <>
          <ContainerInfo>
            <Title isDiet={isInDiet}>Que pena!</Title>

            <Description>Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se esforçando e não desista!</Description>
          </ContainerInfo>
          <Image
            source={imgSadness}
            style={{ width: 224, height: 288 }}
          />
        </>
      )}
      <ContainerButton>
        <Button
          title="Ir para a página inicial"
          type="DARK"
          onPress={handleNavigateHome}
        />
      </ContainerButton>
    </Container>
  )
}