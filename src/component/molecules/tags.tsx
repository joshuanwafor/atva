import * as React from 'react';
import {Text} from 'react-native';
import styledMap from 'styled-map';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {sizeScale, getColorFromTheme, getFontFromTheme} from '../../utils';
import {theme} from '../../style/theme';

export const Tags = styled.Text<{type?: 'light' | 'dark'}>`
  flex-direction: row;
  align-items: center;
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  color: ${styledMap('type', {
    light: theme.colors.pale,
    dark: theme.colors.brownishGrey,
    default: theme.colors.brownishGrey,
  })};
  font-family: ${getFontFromTheme('medium')};
`;

export const Dot = styled.Text`
  font-size: ${sizeScale(ms(7, 0.2), 'px')};
  color: ${getColorFromTheme('goldenrod')};
  font-family: ${getFontFromTheme('medium')};
`;

const MovieTags = React.memo(function ({
  tags,
  type,
}: {
  tags: string[];
  type?: 'light' | 'dark';
}) {
  return (
    <Tags type={type}>
      {tags.map((tag, idx) => (
        <React.Fragment key={`index-${idx}`}>
          <Text>{tag}</Text>
          {idx !== tags.length - 1 && <Dot> • </Dot>}
        </React.Fragment>
      ))}
    </Tags>
  );
});

export default MovieTags;
