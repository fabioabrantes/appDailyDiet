import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native";

type IndicatorStyleProp = {
  variant: 'success' | 'failure'
}

export const Container = styled(TouchableOpacity)`
    padding: 14px 12px;
    margin-bottom: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
    border-radius: 6px;
`;

export const Hour = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.sm}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `};
`;

export const Divider = styled.View`
    margin: 0 12px;
    width:0px;
    height: 14px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const FoodName = styled.Text`
  flex: 1;
  ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.lg}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2};
  `};
`;

export const Indicator = styled.View<IndicatorStyleProp>`
    width: 14px;
    height: 14px;
    border-radius: 999px;
    background-color: ${({ theme, variant }) => {
        if (variant === 'failure') {
            return theme.COLORS.RED_LIGHT
        }

        return theme.COLORS.GREEN_LIGHT
    }};
`;

