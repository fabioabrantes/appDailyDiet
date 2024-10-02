import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type HeaderVariantType = "default" | "success" | "danger";

type Props = {
  variant: HeaderVariantType;
}

export const Container = styled.View<Props>`
    padding: 24px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    height: 100px;
    padding-top: 50px;

    ${({ variant, theme }) => {
    if (variant === "danger") {
      return css` background-color: ${theme.COLORS.RED_LIGHT};`;
    }else if(variant === "success"){
      return css` background-color: ${theme.COLORS.GREEN_LIGHT}; `;
    }else{
      return css` background-color: ${theme.COLORS.GRAY_5}; `;
    }
  }};
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.xl}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;