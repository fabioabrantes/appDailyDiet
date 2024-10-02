import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 32px;;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const ContainerInfo = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

type props = {
  isDiet: boolean;
}
export const Title = styled.Text<props>`
    ${({ theme, isDiet }) => css`
        color: ${isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.xxxl}px;
    `};
`

export const Description = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.lg}px;
    `};
    text-align: center;
`

export const Strong = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`
export const ContainerButton = styled.View`
  width: 100%;
  margin-top: 32px;
`;