import styled, { css } from "styled-components/native";


type ButtonDietTypeStyleProps = {
    type: 'PRIMARY' | 'SECONDARY';
    isActive?: boolean | undefined;
}

type Props = ButtonDietTypeStyleProps;

export const Container = styled.TouchableOpacity<Props>`
    width: 160px;
    height: 50px;
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${({ theme, type, isActive }) => isActive ? css`
        background-color: ${type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
        border: 1px solid ${type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    ` : css`
        background-color: ${theme.COLORS.GRAY_6};
    `
    };
`

export const Icon = styled.View<Props>`
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 999px;
    background-color: ${({ theme, type }) => type === 'PRIMARY' ?
        theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
    };
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.md}px;
        color: ${theme.COLORS.GRAY_1};
    `};
`;
