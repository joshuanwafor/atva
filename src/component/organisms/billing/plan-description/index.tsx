import * as React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {
  sizeScale,
  getFontFromTheme,
  getColorFromTheme,
} from '../../../../utils';
import {theme} from '../../../../style/theme';
import Close from '../../../atoms/icons/close';
import Check from '../../../atoms/icons/check';
import {observer} from 'mobx-react';
import {usePlanHooks} from '../../../../hooks/billing/plan';
import {ContentStoreContext} from 'src/store/data/content/content';

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
  padding-left: 12px;
  padding-right: 12px;
`;

const PlanText = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(14, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('white')};
  margin-left: 10px;
`;

const PlanDescription = function () {
  const {selectedPlan} = usePlanHooks();

  const renderIcon = React.useCallback((isActive: boolean) => {
    if (isActive) {
      return <Check fill={theme.colors.alt} width={18} height={18} />;
    }
    return <Close fill={theme.colors.rouge} width={18} height={18} />;
  }, []);

  const RenderFeatures = () => {
    if (selectedPlan == undefined) {
      return <View></View>;
    }
    return (
      <PlansWrapper>
        {selectedPlan.description.split('|').map((v, i) => {
          let trimmed = v.trim();
          let yesORNo = trimmed.substring(0, trimmed.lastIndexOf(':') + 1);
          let isFeatureEnabled: boolean = yesORNo == '::yes::' ? true : false;
          return (
            <PlanWrapper key={i}>
              {renderIcon(isFeatureEnabled)}
              <PlanText>
                {trimmed.substring(
                  trimmed.lastIndexOf(':') + 1,
                  trimmed.length,
                )}
              </PlanText>
            </PlanWrapper>
          );
        })}
      </PlansWrapper>
    );
  };

  return (
    <Wrapper>
      <Title>Unlimited access.</Title>
      <Subtitle>Watch up to 4 devices and offline.</Subtitle>
      <Subtitle>We'll remind you 3 days before your trial ends.</Subtitle>
      <RenderFeatures />
    </Wrapper>
  );
};

export default PlanDescription;
