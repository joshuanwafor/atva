import * as React from 'react';
import styled from 'styled-components/native';
import Animated, {Easing} from 'react-native-reanimated';
import {useTransition, interpolateColor} from 'react-native-redash';
import {s, ms} from 'react-native-size-matters';
import {getColorFromTheme, getFontFromTheme, sizeScale} from '../../../utils';
import {theme} from '../../../style/theme';
import TouchableItem from '../../molecules/touchable-item';
import {PlanType} from '../../../interface';

const PlanWrapper = styled.View`
  border-radius: 6px;
  width: auto;
  height: 120px;
  min-width: 170px;
`;

const PlanInnerWrapper = styled(Animated.View)`
  border-radius: 6px;
  width: 100%;
  height: 100%;
  padding-vertical: 15px;
  padding-horizontal: 15px;
  border-width: 2px;
  border-color: red;
  position: relative;
  margin-right: 10px;
`;

const PlanPrice = styled.Text`
  font-family: ${getFontFromTheme('demiBold')};
  font-size: ${sizeScale(ms(16, 0.2), 'px')};
  text-align: center;
  color: ${getColorFromTheme('white')};
  margin-bottom: 5px;
  margin-top: 5px;
`;

const PlanFreeTime = styled.Text`
  font-family: ${getFontFromTheme('regular')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  text-align: center;
  color: ${getColorFromTheme('white')};
`;

const PlanTitle = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  text-align: center;
  color: ${getColorFromTheme('white')};
  letter-spacing: 3px;
`;

const PlanTagWrapper = styled.View`
  width: auto;
  height: 20px;
  border-radius: 10px;
  background-color: ${getColorFromTheme('altPink')};
  position: absolute;
  top: -10px;
  margin: auto;
  align-self: center;
  padding-horizontal: ${sizeScale(ms(15, 0.2), 'px')};
`;

const PlanTagTitle = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(11, 0.2), 'px')};
  text-align: center;
  color: ${getColorFromTheme('white')};
`;

const Plan = React.memo(function ({
  plan,
  active,
  onPress,
}: {
  plan: PlanType;
  onPress: () => void;
  active: boolean;
}) {
  const transition = useTransition(active, {
    duration: 200,
  });

  return (
    <PlanWrapper>
      <TouchableItem
        accessible
        accessibilityRole="button"
      
        accessibilityLabel={`Select ${plan.title} plan`}
        delayPressIn={0}
        onPress={onPress}>
        <PlanInnerWrapper>
          <PlanTitle>{plan.title.toUpperCase()}</PlanTitle>
          <PlanPrice>{plan.price}</PlanPrice>
          <PlanFreeTime>30 days free</PlanFreeTime>
          {plan.recommended && (
            <PlanTagWrapper>
              <PlanTagTitle>BEST VALUE</PlanTagTitle>
            </PlanTagWrapper>
          )}
        </PlanInnerWrapper>
      </TouchableItem>
    </PlanWrapper>
  );
});

export default Plan;
