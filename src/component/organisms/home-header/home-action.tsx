import * as React from 'react';
import {View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {theme} from '../../../style/theme';
import BlurButton from '../../molecules/button/blur-button';
import {HomeSections} from '../../../interface';

const HomeAction = React.memo(function ({
  innerRef,
  onChange,
}: {
  innerRef: React.RefObject<Modalize>;
  onChange: (section: HomeSections) => void;
}) {
 
  return (
    <Portal>
      <Modalize
        ref={innerRef}
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
          <BlurButton onPress={() => onChange(HomeSections.CINEMA)}>
            View all cinema movies
          </BlurButton>
          <View style={{height: 10}} />
          <BlurButton onPress={() => onChange(HomeSections.MOVIES)}>
            View all movies
          </BlurButton>
          <View style={{height: 10}} />
          <BlurButton onPress={() => onChange(HomeSections.SERIES)}>
            View all shows/series
          </BlurButton>
          <View style={{height: 10}} />
          <BlurButton onPress={() => onChange(HomeSections.HOME)}>
            Back to home
          </BlurButton>
        </View>
      </Modalize>
    </Portal>
  );
});

export default HomeAction;
