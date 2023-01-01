import * as React from 'react';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import {ms, s} from 'react-native-size-matters';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../../utils';
import {theme} from '../../../style/theme';
import {MovieInfo, MovieMeta} from '../../../interface';
import {Box} from 'native-base';

const Wrapper = styled.View`
  width: 100%;
  margin-bottom: 20px;
  padding-left: ${sizeScale(s(12), 'px')};
  padding-right: ${sizeScale(s(12), 'px')};
`;

const AboutInfoWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
`;

const PosterWrapper = styled.View`
  width: ${sizeScale(ms(120, 0.3), 'px')};
  margin-right: 15px;
`;

const InfoWrapper = styled.View`
  width: auto;
  flex: 1;
`;

export const Title = styled.Text`
  color: ${getColorFromTheme('white')};
  font-family: ${getFontFromTheme('demiBold')};
  font-size: ${sizeScale(ms(18, 0.2), 'px')};
  margin-bottom: 10px;
`;

const Synopsis = styled.Text`
  margin-bottom: 10px;
  color: ${getColorFromTheme('brownGrey')};
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
`;

const Starring = styled.Text`
  color: ${getColorFromTheme('brownishGrey')};
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
`;

const StaringItem = styled.Text`
  color: ${getColorFromTheme('brownGrey')};
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
`;

const MetaWrapper = styled.View`
  border-radius: 8px;
  padding-horizontal: ${sizeScale(s(16), 'px')};
  padding-vertical: ${sizeScale(s(12), 'px')};
  background-color: ${getColorFromTheme('blackTwo')};
  width: 100%;
  margin-top: 20px;
`;

const MetaItemWrapper = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

const MetaTitle = styled.Text`
  color: ${getColorFromTheme('pale')};
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  margin-bottom: 5px;
`;

const MetaContent = styled.Text`
  color: ${getColorFromTheme('brownishGrey')};
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
`;

const Meta = React.memo(function ({meta}: {meta: MovieMeta}) {
  return (
    <MetaItemWrapper>
      <MetaTitle>{meta.title}</MetaTitle>
      <MetaContent>{meta.content}</MetaContent>
    </MetaItemWrapper>
  );
});

const AboutInfo = React.memo(function ({
  info,
  title,
}: {
  info: MovieInfo;
  title: string;
}) {
  return (
    <Wrapper>
      <AboutInfoWrapper>
        <PosterWrapper>
          <FastImage
            style={{
              width: '100%',
              minHeight: 150,
              justifyContent: 'flex-start',
              flex: 1,
              alignSelf: 'stretch',
              borderRadius: 6,
              backgroundColor: theme.colors.blackThree,
            }}
            source={{
              uri: info.poster,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </PosterWrapper>
        <InfoWrapper>
          <Title>{title}</Title>
          <Synopsis>{info.synopsis}</Synopsis>
          <Starring>
            Starring:{' '}
            {info.staring.map((star, idx) => (
              <StaringItem key={star.id}>
                {`${star.name}${idx === info.staring.length - 1 ? '.' : ','} `}
              </StaringItem>
            ))}
          </Starring>
        </InfoWrapper>
      </AboutInfoWrapper>

      <MetaWrapper>
        {info.meta.map(meta => (
          <Meta meta={meta} key={meta.id} />
        ))}
      </MetaWrapper>
      <Box height={100}></Box>
    </Wrapper>
  );
});

export default AboutInfo;
