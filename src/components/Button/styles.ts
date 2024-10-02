import styled, { css } from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';

type ButtonProps = {
    type: 'DARK' | 'LIGHT';
}


export const Container = styled.TouchableOpacity<ButtonProps>`
    height: 50px;
    border-radius: 6px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 12px 24px;

    ${({ theme, type }) => type === 'DARK' ? css`
        background-color: ${theme.COLORS.GRAY_2};
    ` : css`
        border: 1px solid ${theme.COLORS.GRAY_1};
        background-color: ${theme.COLORS.GRAY_7};
    `}  
`;

export const Icon = styled(AntDesign).attrs<ButtonProps>(({ theme, type }) => ({
    size: theme.FONT_SIZE.xl,
    color: type === 'DARK' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1
}))``;

export const Title = styled.Text<ButtonProps>`
    ${({ theme, type }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.md}px;
        color: ${type === 'DARK' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    `};
`;