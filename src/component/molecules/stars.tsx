import * as React from 'react';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {MovieStar} from '../../interface';
import {sizeScale, getColorFromTheme, getFontFromTheme} from '../../utils';
import Star from '../atoms/icons/star';
import StarOutline from '../atoms/icons/star-outline';
import {theme} from '../../style/theme';

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
  color: ${getColorFromTheme('brownishGrey')};
  font-family: ${getFontFromTheme('medium')};
  margin-left: 5px;
`;

const MovieStars = React.memo(function (props: {star: MovieStar}) {
  function renderFilled() {
    return Array(5)
      .fill('')
      .map((v, i) =>
        i < props.star.average ? (
          <Star
            key={`key-${i}`}
            fill={theme.colors.goldenrod}
            width={14}
            height={14}
            style={{marginRight: 3}}
          />
        ) : (
          <StarOutline
            key={`key-${i}`}
            fill={theme.colors.goldenrod}
            width={14}
            height={14}
            style={{marginRight: 3}}
          />
        ),
      );
  }

  return (
    <Wrapper>
      {renderFilled()}
      <Text>{props.star.total}</Text>
    </Wrapper>
  );
});

export default MovieStars;
