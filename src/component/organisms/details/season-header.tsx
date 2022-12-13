import * as React from 'react';
import {ms} from 'react-native-size-matters';
import styled from 'styled-components/native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {View} from 'react-native';
import {sizeScale, getColorFromTheme, getFontFromTheme} from '../../../utils';
import {theme} from '../../../style/theme';
import TouchableItem from '../../molecules/touchable-item';
import Check from '../../atoms/icons/check';
import Download from '../../atoms/icons/download';
import AngleArrowDown from '../../atoms/icons/angle-arrow-down';
import {Season} from '../../../interface';
import BlurButton from '../../molecules/button/blur-button';

const SeasonsWrapper = styled.View`
  width: 100%;
  margin-bottom: 26px;
  padding-horizontal: ${sizeScale(ms(12, 0.3), 'px')};
`;

const SeasonsHeader = styled.View`
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin-bottom: 10px;
`;

const ActionsWrapper = styled.View`
  flex-direction: row;
`;

const ButtonWrapper = styled.View`
  margin-left: 25px;
`;

const TitleWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: ${getColorFromTheme('white')};
  font-family: ${getFontFromTheme('regular')};
`;

const Year = styled.Text`
  font-size: 16px;
  color: ${getColorFromTheme('white70')};
  font-family: ${getFontFromTheme('regular')};
`;

const Synopsis = styled.Text`
  margin-bottom: 10px;
  color: ${getColorFromTheme('brownGrey')};
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
`;

const EpisodesNumberWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-left: 5px;
  border-radius: 14px;
  background-color: ${getColorFromTheme('rouge')};
`;

const Episodes = styled.Text`
  color: white;
`;

export const SeasonHeader = React.memo(function ({
  season: {title, synopsis, year, data},
  changeSeason,
  seasons,
}: {
  season: Pick<Season, 'synopsis' | 'title' | 'year' | 'data'>;
  seasons: Pick<Season, 'title' | 'id' | 'year'>[];
  changeSeason: (index: number) => void;
}) {
  const actionRef = React.useRef<Modalize>(null);

  const [isDownloaded, setIsDownloaded] = React.useState(false);

  const handleDownload = React.useCallback(() => {
    setIsDownloaded(!isDownloaded);
  }, [isDownloaded]);

  const renderDownload = React.useMemo(() => {
    return (
      <TouchableItem
        accessible
        accessibilityRole="button"
        accessibilityComponentType="button"
        accessibilityLabel="Download all episode"
        accessibilityTraits="button"
        delayPressIn={0}
        style={{width: '100%'}}
        disabled={isDownloaded}
        onPress={handleDownload}>
        {isDownloaded ? (
          <Check fill={theme.colors.alt} />
        ) : (
          <Download fill="#fff" />
        )}
      </TouchableItem>
    );
  }, [handleDownload, isDownloaded]);

  const showActionRef = React.useCallback(() => {
    actionRef.current?.open();
  }, []);

  const changeHomeSection = (index: number) => {
    changeSeason(index);
    actionRef.current?.close();
  };

  return (
    <SeasonsWrapper>
      <SeasonsHeader>
        <TitleWrapper>
          <Title>{title}</Title>
          <EpisodesNumberWrapper>
            <Episodes>{data.length}</Episodes>
          </EpisodesNumberWrapper>
        </TitleWrapper>
        <ActionsWrapper>
          <ButtonWrapper>{renderDownload}</ButtonWrapper>
          {seasons.length > 1 && (
            <ButtonWrapper>
              <TouchableItem
                accessible
                accessibilityRole="button"
                accessibilityComponentType="button"
                accessibilityLabel="Select episode"
                accessibilityTraits="button"
                delayPressIn={0}
                style={{width: '100%'}}
                onPress={showActionRef}>
                <AngleArrowDown fill="#fff" />
              </TouchableItem>
            </ButtonWrapper>
          )}
        </ActionsWrapper>
      </SeasonsHeader>
      <Synopsis>{synopsis}</Synopsis>
      <Year>{year}</Year>
      <Portal>
        <Modalize
          ref={actionRef}
          overlayStyle={{
            backgroundColor: 'rgba(20, 20, 20, 0.4)',
          }}
          modalStyle={{
            backgroundColor: theme.colors.blackThree,
            elevation: 0,
            shadowColor: 'transparent',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0,
            shadowRadius: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          closeOnOverlayTap={true}
          handlePosition="inside"
          disableScrollIfPossible={true}
          panGestureComponentEnabled={true}
          handleStyle={{
            backgroundColor: theme.colors.blackTwo,
          }}
          adjustToContentHeight={true}>
          <View
            style={{
              alignItems: 'center',
              height: '100%',
              width: '100%',
              padding: 20,
              paddingTop: 20,
            }}>
            {seasons.map((season, index) => (
              <React.Fragment key={season.id}>
                <BlurButton onPress={() => changeHomeSection(index)}>
                  {season.title}
                </BlurButton>
                <View style={{height: 10}} />
              </React.Fragment>
            ))}
          </View>
        </Modalize>
      </Portal>
    </SeasonsWrapper>
  );
});
