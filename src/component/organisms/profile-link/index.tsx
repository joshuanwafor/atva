import * as React from 'react';
import {
  Wrapper,
  ActionWrapper,
  AvatarWrapper,
  RightIconWrapper,
  TextWrapper,
  SubTitle,
  Title,
} from './style';
import {theme} from '../../../style/theme';
import TouchableItem from '../../molecules/touchable-item';
import AngleArrowRight from '../../atoms/icons/angle-arrow-right';

interface TProps {
  title: string;
  subtitle?: string;
  onPress?: () => void;
  avatar: React.ReactChild;
}

function ProfileLink(props: TProps) {
  const {onPress, avatar, title, subtitle} = props;

  return (
    <Wrapper>
      <TouchableItem
        accessible
        accessibilityRole="button"
        accessibilityComponentType="button"
        accessibilityLabel="My Account"
        accessibilityTraits="button"
        delayPressIn={0}
        onPress={onPress}>
        <ActionWrapper>
          <AvatarWrapper>{avatar}</AvatarWrapper>
          <TextWrapper>
            <Title>{title}</Title>
            {subtitle && <SubTitle>{subtitle}</SubTitle>}
          </TextWrapper>
          <RightIconWrapper>
            <AngleArrowRight
              fill={theme.colors.brownishGrey}
              width={10}
              height={10}
            />
          </RightIconWrapper>
        </ActionWrapper>
      </TouchableItem>
    </Wrapper>
  );
}

export default ProfileLink;
