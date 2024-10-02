import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';


type ButtonProps = {
  position: "open" | "back" | "default";
}
export const Container = styled(TouchableOpacity) <ButtonProps>`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
 

  ${({ position }) => {
    if (position === "back") {
      return css`
              position:absolute;
              top: 50px;
              left: 24px;
            `
    } else if (position === "open") {
      return css`
              position:absolute;
              right: 12px;
              top: 2px;
            `
    } else {
      return css`margin-right:80px;`;
    }

  }};
`;

type IconProps = {
  cor: "PRIMARY" | "SECONDARY" | "DEFAULT";
}
export const Icon = styled(Feather).attrs<IconProps>(({ theme,cor }) => {
  let corIcon:string = theme.COLORS.GRAY_2;

  if (cor === 'PRIMARY') {
    corIcon = theme.COLORS.GREEN_DARK;
  } else if (cor === 'SECONDARY') {
    corIcon = theme.COLORS.RED_DARK;
  }
  return {
    size: theme.FONT_SIZE.xxl,
    color: corIcon
  }
})``;