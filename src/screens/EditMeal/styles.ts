import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex: 1; 
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const ContainerForm = styled.View`
  flex:1;
  justify-content:space-between;
  margin-top:40px;
  padding: 0 24px;
`;


export const WrapperHorizontal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CustomLabelContainer = styled.View`
    flex: 1;
`;

export const CustomLabelText = styled.Text`
    margin-bottom: 6px;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.md}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `};
`
export const ContainerDiet = styled.View`
  margin-bottom:50px;
`;

export const InfoDiet = styled.Text`
   margin-bottom: 8px;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.md}px;
        color: ${theme.COLORS.GRAY_2};
    `};
`;

export const ContainerButton = styled.View`
 margin-bottom: 40px;
 
`;