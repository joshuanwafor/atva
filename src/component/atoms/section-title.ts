import styled from 'styled-components/native';
import {ms, s} from 'react-native-size-matters';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../utils';

const SectionTitle = styled.Text<{hasPadding?: boolean}>`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(14, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('white')};
  margin-bottom: 5px;
  padding-left: ${({hasPadding}) =>
    hasPadding ? sizeScale(s(12), 'px') : '0px'};
  padding-right: ${({hasPadding}) =>
    hasPadding ? sizeScale(s(12), 'px') : '0px'};
`;

export default SectionTitle;
