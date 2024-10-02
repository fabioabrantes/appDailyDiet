import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex: 1; 
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Content = styled.View`
  flex:1;
  justify-content:space-between;
  margin-top:40px;
  padding: 0 24px;
`;

export const ContainerInfoMeal = styled.View`
  flex:1;
  
`;

export const ContainerNameDescription = styled.View`

`;

export const Name = styled.Text`
    margin-bottom: 8px;

    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.xl}px;
    `};
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.lg}px;
    `};
`;

export const ContainerTime = styled.View`

`;

export const LabelTime = styled.Text`
    margin-top: 24px;
    margin-bottom: 8px;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.md}px;
        color: ${theme.COLORS.GRAY_2};
    `};
`;

export const DateHour = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.lg}px;
        color: ${theme.COLORS.GRAY_2};
    `};
`;
export const ContainerIndicator = styled.View`
     margin-top: 24px;
    padding: 8px 16px;
    flex-direction: row;
    align-items: center;
    align-self: flex-start;
    background-color: ${({ theme }) => theme.COLORS.GRAY_6};
    border-radius: 999px;
`;

export const PointIndicator = styled.View<{ isDiet: boolean }>`
    margin-right: 8px;
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background-color: ${({ isDiet, theme }) => isDiet ? theme.COLORS.GREEN_DARK :theme.COLORS.RED_DARK};
`;

export const TextIndicator = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.md}px;
        color: ${theme.COLORS.GRAY_1};
    `};
`;

export const ContainerButton = styled.View`
 margin-bottom: 40px;
 gap:8px;
`;


export const ModalContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
    background-color: rgba(20, 20, 20, 0.5);
`;

export const ModalWrapper = styled.View`
    background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
    padding: 20px;
    border-radius: 8px;
    align-items: center;
`;

export const ModalTitle = styled.Text`
    text-align: center;
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.lg}px;
    `};
`;

export const ModalButtonInteraction = styled.View`
    margin-top: 32px;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap:8px;
`;