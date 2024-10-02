import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  ContainerBackgroundColor: "PRIMARY" | "SECONDARY"
  position?: "open" | "back";
}

export const Container = styled.View<Props>`
    width: 100%;
    padding: 20px;
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: ${({ theme, ContainerBackgroundColor }) => {
    if (ContainerBackgroundColor === "SECONDARY") {
      return theme.COLORS.RED_LIGHT;
    }

    return theme.COLORS.GREEN_LIGHT;
  }};
  ${({ position }) => position === 'back' && css`
    padding-top:60px;
    padding-bottom: 34px;
  `}
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.xxxl}px;
    `}
`;

export const Info = styled.Text`
  ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-size: ${theme.FONT_SIZE.md}px;
      color: ${theme.COLORS.GRAY_2}
  `}
/* font-size: ${({ theme }) => theme.FONT_SIZE.md}px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR}; */
`;