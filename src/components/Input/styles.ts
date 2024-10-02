import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";


export const Container = styled.View``;

export const Label = styled.Text`
    margin-bottom: 6px;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.md}px;
        color: ${theme.COLORS.GRAY_2};
    `};
`;

export const InputText = styled(TextInput)`
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};

`