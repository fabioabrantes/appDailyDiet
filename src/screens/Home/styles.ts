import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.GRAY_7};
  align-items: center;
  padding: 0 24px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin:38px 0;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const AvatarWrapper = styled.View`
  width: 40px;
  height: 40px;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  border-radius: 999px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const UserAvatar = styled.Image`
  width: 32px;
  height: 32px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #000;
  font-weight:bold;
 
`;

export const ContenContainer = styled.View`
  width: 100%;
  margin-top: 45px;
`;

export const ContentButton = styled.View`
  gap: 8px;
  margin-bottom: 32px;
  
`;

export const TitleContentButton = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.lg}px;
        color: ${theme.COLORS.GRAY_1};
    `};
`;

export const DayHeader = styled.Text`
    margin-top: 30px;
    margin-bottom: 8px;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.xl}px;
    `}
`;
