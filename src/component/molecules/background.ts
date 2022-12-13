import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import {getColorFromTheme} from '../../utils';

export const Background = styled(SafeAreaView)`
  height: 100%;
  background: ${getColorFromTheme('black')};
  position: relative;
`;

export const PageWrapper = styled.View`
  height: 100%;
  flex: 1;
`;

export default Background;
