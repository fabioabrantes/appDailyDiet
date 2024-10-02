import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.GRAY_7};
  align-items: center;
  
`;

export const Content = styled.View`
  padding: 0 24px;
  flex:1;
  align-items: center;
  gap:12px;
  margin-bottom: 50px;
`;

export const Title = styled.Text`
    margin-top: 33px;
    margin-bottom: 20px;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.md}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `};
`;
export const InfoContent = styled.View`
  flex-direction: row;
  gap:12px;
`;