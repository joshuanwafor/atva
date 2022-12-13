import * as React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import styledMap from 'styled-map';
import {sizeScale, getColorFromTheme, getFontFromTheme} from '../../utils';
import {theme} from '../../style/theme';

export const Tags = styled.Text<{size?: 'default' | 'small'}>`
  flex-direction: row;
  align-items: center;
  font-size: ${styledMap('size', {
    small: sizeScale(ms(13, 0.2), 'px'),
    default: sizeScale(ms(16, 0.2), 'px'),
  })};
  color: ${theme.colors.white};
  font-family: ${getFontFromTheme('medium')};
`;

export const DotsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Dot = styled.Text`
  font-size: ${sizeScale(ms(10, 0.2), 'px')};
  color: ${getColorFromTheme('brownishGrey')};
  font-family: ${getFontFromTheme('medium')};
`;

const CaptionTags = React.memo(function ({
  tags,
  size,
  content,
}: {
  tags: string[];
  size?: 'default' | 'small';
  content?: React.ReactNode;
}) {
  return (
    <DotsWrapper>
      <Tags size={size}>
        {tags.map((tag, idx) => (
          <React.Fragment key={`index-${idx}`}>
            <Text
              style={{
                fontFamily: idx === 0 ? theme.font.demiBold : theme.font.medium,
              }}>
              {tag}
            </Text>
            {idx !== tags.length - 1 && <Dot> • </Dot>}
          </React.Fragment>
        ))}
      </Tags>
      {content}
    </DotsWrapper>
  );
});

export default CaptionTags;
