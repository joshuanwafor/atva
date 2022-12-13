import * as React from 'react';
import {View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {theme} from '../../../style/theme';
import BlurButton from '../../molecules/button/blur-button';
import {HomeSections} from '../../../interface';
import {RenderTickets} from '../tickets/render';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {getColorFromTheme, getFontFromTheme, sizeScale} from './../../../utils';

const Title = styled.Text`
  color: ${getColorFromTheme('white')};
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(16, 0.3), 'px')};
  padding-left: 20px;
  padding-top: 24px;
`;

const BuyTicketAction = React.memo(function ({
  innerRef,
  onChange,
  contentId,
  tickets,
}: {
  innerRef: React.RefObject<Modalize>;
  onChange: (section: HomeSections) => void;
  contentId: string;
  tickets: any[];
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
        adjustToContentHeight={true}
      >
        <Title>Available tickets</Title>
        <View
          style={{
            alignItems: 'center',
            height: '100%',
            width: '100%',
            padding: 20,
            paddingTop: 20,
          }}
        >
          <RenderTickets contentId={contentId} tickets={tickets} />
        </View>
      </Modalize>
    </Portal>
  );
});

export default BuyTicketAction;
