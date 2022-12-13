import * as React from 'react';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../../utils';
import {PlanType} from '../../../interface';
import {theme} from '../../../style/theme';
import Close from '../../atoms/icons/close';
import Check from '../../atoms/icons/check';

const Title = styled.Text`
  font-family: ${getFontFromTheme('demiBold')};
  font-size: ${sizeScale(ms(24, 0.2), 'px')};
  text-align: center;
  color: ${getColorFromTheme('white')};
  margin-bottom: 10px;
  margin-top: 100px;
`;

const Subtitle = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(14, 0.2), 'px')};
  text-align: center;
  color: ${getColorFromTheme('white70')};
  margin-bottom: 5px;
`;

const Wrapper = styled.View`
  flex: 1;
`;

const PlansWrapper = styled.View`
  margin-top: 20px;
`;

const PlanWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const PlanText = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(14, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('white')};
  margin-left: 10px;
`;

const CompleteRegisterContent = React.memo(function ({plan}: {plan: PlanType}) {
  const renderIcon = React.useCallback((isActive: boolean) => {
    if (isActive) {
      return <Check fill={theme.colors.alt} width={18} height={18} />;
    }
    return <Close fill={theme.colors.rouge} width={18} height={18} />;
  }, []);

  return (
    <Wrapper>
      <Title>Unlimited access.</Title>
      <Subtitle>Watch up to 4 devices and offline.</Subtitle>
      <Subtitle>We'll remind you 3 days before your trial ends.</Subtitle>
      <PlansWrapper>
        {plan.features.map((feature) => (
          <PlanWrapper key={feature.content}>
            {renderIcon(feature.available)}
            <PlanText>{feature.content}</PlanText>
          </PlanWrapper>
        ))}
      </PlansWrapper>
    </Wrapper>
  );
});

export default CompleteRegisterContent;
