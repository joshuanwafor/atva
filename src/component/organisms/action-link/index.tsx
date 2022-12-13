import * as React from 'react';
import {View} from 'react-native';
import {
  Wrapper,
  ActionWrapper,
  FooterWrapper,
  IconWrapper,
  RightIconWrapper,
  TextWrapper,
  SubTitle,
  Title,
  InnerWrapper,
} from './style';

import AngleArrowRight from '../../atoms/icons/angle-arrow-right';
import External from '../../atoms/icons/external';
import TouchableItem from '../../molecules/touchable-item';

import {theme} from '../../../style/theme';

interface TProps {
  title: string;
  subtitle?: string;
  onPress?: () => void;
  icon: React.ReactChild;
  hasBorder?: boolean;
  accessibilityLabel?: string;
  footer?: React.ReactNode;
  actionType?: 'next' | 'external' | 'custom' | 'none';
  actionComponent?: React.ReactNode;
  disabled?: boolean;
}

function ActionLink(props: TProps) {
  const {
    accessibilityLabel,
    onPress,
    hasBorder,
    footer,
    icon,
    actionType,
    actionComponent,
    title,
    subtitle,
    disabled,
  } = props;

  function renderRightIcon() {
    if (actionType === 'custom') {
      return actionComponent;
    }
    let rightIcon: React.ReactNode = <View />;
    switch (actionType) {
      case 'external':
        rightIcon = (
          <External fill={theme.colors.brownishGrey} width={10} height={10} />
        );
        break;
      case 'none':
        rightIcon = <View />;
        break;
      case 'next':
        rightIcon = (
          <AngleArrowRight
            fill={theme.colors.brownishGrey}
            width={10}
            height={10}
          />
        );
        break;
      default:
        rightIcon = <View />;
        break;
    }
    return <RightIconWrapper>{rightIcon}</RightIconWrapper>;
  }

  return (
    <Wrapper>
      <TouchableItem
        accessible
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        delayPressIn={0}
        disabled={disabled}
        onPress={onPress}>
        <InnerWrapper>
          <ActionWrapper hasBorder={hasBorder}>
            <IconWrapper>{icon}</IconWrapper>
            <TextWrapper>
              <Title>{title}</Title>
              {subtitle && <SubTitle>{subtitle}</SubTitle>}
            </TextWrapper>
            {(onPress || actionComponent) && renderRightIcon()}
          </ActionWrapper>
        </InnerWrapper>
      </TouchableItem>
      {footer && <FooterWrapper>{footer}</FooterWrapper>}
    </Wrapper>
  );
}

export default ActionLink;
