import * as React from 'react';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import {getColorFromTheme, sizeScale} from '../../utils';
import User from '../atoms/icons/user';

const Wrapper = styled.View<{size?: number}>`
  border-radius: 50px;
  background-color: ${getColorFromTheme('blackTwoV2')};
  width: ${({size}) => {
    return sizeScale(ms(size ?? 50, 0.3), 'px');
  }};
  height: ${({size}) => {
    return sizeScale(ms(size ?? 50, 0.3), 'px');
  }};
  justify-content: center;
  align-items: center;
  position: relative;
`;

const IconWrapper = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

const Image = styled(FastImage)`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

interface TProps {
  source?: string;
  size?: number;
}

function SAvatar({source, size}: TProps) {
  const [loading, setLoading] = React.useState(!!source);
  return (
    <Wrapper size={size}>
      {!!source && (
        <Image
          source={{
            uri: source,
            priority: FastImage.priority.high,
          }}
          onLoad={() => setLoading(false)}
          resizeMode={FastImage.resizeMode.cover}
          style={{width: '100%', height: '100%'}}
        />
      )}

      {(!source || loading) && (
        <IconWrapper>
          <User height={20} width={20} fill="#fff" />
        </IconWrapper>
      )}
    </Wrapper>
  );
}

export default SAvatar;
