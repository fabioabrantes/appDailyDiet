import styled, { css } from "styled-components/native";

export type VariantsStyleType = "default" | "success" | "danger"

type Props = {
  variant: VariantsStyleType
}

export const Container = styled.View<Props>`
    flex:1;
    align-self: stretch;
    align-items: center;
    padding: 16px;
    background-color: ${({ theme, variant }) => {
    if (variant === "success") {
      return theme.COLORS.GREEN_LIGHT
    }

    if (variant === "danger") {
      return theme.COLORS.RED_LIGHT
    }

    return theme.COLORS.GRAY_6
  }};
    border-radius: 8px;
    
`;

export const Title = styled.Text`
    margin-bottom: 8px;
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_2};
        font-size: ${theme.FONT_SIZE.xxl}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_2};
        font-size: ${theme.FONT_SIZE.md}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
    
`;