import * as React from 'react';
import styled from 'styled-components/native';
import {ms, s} from 'react-native-size-matters';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../../utils';
import {MovieTicket} from '../../../interface';
import TouchableItem from '../../molecules/touchable-item';
import {Linking, Platform, View} from 'react-native';
import {AppFormatNumber} from '../../../config/utils';
import {postBuyTicket} from '../../../services/user/billing';
import {useNotify} from '../../../hooks/notify';
import {usePusher} from '../../../hooks/pusher';

const Wrapper = styled.View`
  width: 100%;
  margin-bottom: 20px;
  padding-left: ${sizeScale(s(12), 'px')};
  padding-right: ${sizeScale(s(12), 'px')};
`;

const TicketWrapper = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
  padding-vertical: ${sizeScale(ms(8, 0.2), 'px')};
`;

const ButtonWrapper = styled.View`
  margin-left: 10px;
`;

const ContentWrapper = styled.View`
  align-items: center;
  flex-direction: row;
`;

const ContentInnerWrapper = styled.View`
  margin-left: 10px;
`;

const Title = styled.Text`
  color: ${getColorFromTheme('white')};
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(16, 0.3), 'px')};
`;

const Subtitle = styled.Text`
  color: ${getColorFromTheme('brownishGrey')};
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(12, 0.3), 'px')};
`;

const CalendarWrapper = styled.View`
  position: relative;
  background-color: ${getColorFromTheme('pale')};
  border-radius: 6px;
  overflow: hidden;
  min-width: 55px;
  min-height: 40px;
`;

const MonthWrapper = styled.View`
  width: 100%;
  background-color: ${getColorFromTheme('pink')};
  padding: 3px;
  text-align: center;
`;

const Month = styled.Text`
  text-align: center;
  color: ${getColorFromTheme('white')};
  font-family: ${getFontFromTheme('demiBold')};
  font-size: ${sizeScale(ms(12, 0.3), 'px')};
`;

const Day = styled.Text`
  text-align: center;
  color: ${getColorFromTheme('black')};
  font-family: ${getFontFromTheme('demiBold')};
  font-size: ${sizeScale(ms(16, 0.3), 'px')};
  padding: 5px;
  padding-horizontal: 15px;
`;

const ButtonContainer = styled.View`
  border-radius: 6px;
  overflow: hidden;
`;

const ButtonText = styled.Text`
  text-align: center;
  color: ${getColorFromTheme('black')};
  font-family: ${getFontFromTheme('demiBold')};
  font-size: ${sizeScale(ms(13, 0.3), 'px')};
`;

const ButtonInnerWrapper = styled.View`
  background-color: ${getColorFromTheme('pale')};
  border-radius: 6px;
  padding-vertical: 4px;
  padding-horizontal: 12px;
`;

export const RenderTickets = function ({
  tickets,
  contentId,
}: {
  tickets: {id: string; date: string; amount: number; currency: string}[];
  contentId: string;
}) {
  let {show} = useNotify();

  let {listenToTicketPurchaseEvents} = usePusher();
  console.log(tickets, 'tickets');
  return (
    <Wrapper>
      {tickets.map((ticket, i) => {
        let date = new Date(ticket.date);
        console.log(ticket);
        if (date < new Date()) {
          return <View></View>;
        }
        return (
          <TicketWrapper key={ticket.id}>
            <ContentWrapper>
              <CalendarWrapper>
                <MonthWrapper>
                  <Month>{date.getMonth()}</Month>
                </MonthWrapper>
                <Day>{date.getDate()}</Day>
              </CalendarWrapper>
              <ContentInnerWrapper>
                <Title>{date.toLocaleTimeString()}</Title>
                <Subtitle>{'Premiere ' + (i + 1)}</Subtitle>
              </ContentInnerWrapper>
            </ContentWrapper>
            <ButtonWrapper>
              <ButtonContainer>
                <TouchableItem
                  onPress={() => {
                    if (Platform.OS == 'ios') {
                      Linking.openURL(
                        `https://astratvafrica.com/item${contentId}`,
                      );
                      return;
                    }

                    postBuyTicket(contentId, ticket.id)
                      .then((res: any) => {
                        if (res.data.url) {
                          listenToTicketPurchaseEvents(res.data.reference);
                          Linking.openURL(res.data.url);
                          return;
                        }
                        show(res.data.message);
                      })
                      .catch((err: any) => {
                        console.log('err', contentId, ticket.id, err);
                        show(err.data.message);
                      });
                  }}>
                  <ButtonInnerWrapper>
                    <ButtonText>
                      {Platform.OS == 'android'
                        ? `Buy ticket ${AppFormatNumber(ticket.amount)}`
                        : ' Access on web'}
                    </ButtonText>
                  </ButtonInnerWrapper>
                </TouchableItem>
              </ButtonContainer>
            </ButtonWrapper>
          </TicketWrapper>
        );
      })}
    </Wrapper>
  );
};
