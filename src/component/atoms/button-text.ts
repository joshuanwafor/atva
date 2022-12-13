import {ms} from 'react-native-size-matters';
import styled from 'styled-components/native';
import styledMap from 'styled-map';
import {theme} from '../../style/theme';
import {getFontFromTheme, sizeScale} from '../../utils';
import {ButtonKind} from '../../interface';

interface TProps {
  kind?: ButtonKind;
}

export const ButtonText = styled.Text<TProps>`
  font-size: ${sizeScale(ms(14, 0.2), 'px')};
  font-family: ${getFontFromTheme('medium')};
  text-align: center;
  color: ${styledMap('kind', {
    white: theme.colors.white,
    black: theme.colors.blackFull,
    pink: theme.colors.pink,
    red: theme.colors.grapefruit,
    default: theme.colors.pink,
  })};
`;

export default ButtonText;
