import styled from 'styled-components/native';
import {getColorFromTheme} from '../../utils';

const SectionWrapper = styled.View<{hasBorder?: boolean}>`
  margin-bottom: 20px;
  border-bottom-width: ${({hasBorder}) => (hasBorder ? '1px' : '0px')};
  border-bottom-color: ${getColorFromTheme('white10')};
  padding-bottom: ${({hasBorder}) => (hasBorder ? '20px' : '0px')};
`;

export default SectionWrapper;
