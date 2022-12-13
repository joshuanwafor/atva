import * as React from 'react';
import styled from 'styled-components/native';
import {MovieStar} from '../../interface';
import Star from '../atoms/icons/star';
import StarOutline from '../atoms/icons/star-outline';
import {theme} from '../../style/theme';

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

function RatingStars(props: {star: MovieStar}) {
  function renderFilled() {
    return Array(5)
      .fill('')
      .map((v, i) =>
        i < props.star.average ? (
          <Star
            key={`key-${i}`}
            fill={theme.colors.pale}
            width={12}
            height={12}
            style={{marginRight: 3}}
          />
        ) : (
          <StarOutline
            key={`key-${i}`}
            fill={theme.colors.pale}
            width={12}
            height={12}
            style={{marginRight: 3}}
          />
        ),
      );
  }

  return <Wrapper>{renderFilled()}</Wrapper>;
}

export default RatingStars;
