import * as React from 'react';
import {Image} from 'react-native';
import {
  CodeWrapper,
  CodeItemWrapper,
  CodeImageWrapper,
  CodeText,
} from './style';
import TouchableItem from '../touchable-item';
import {Country} from '../../../interface';

const Code = React.memo(function ({
  onPress,
  country,
}: {
  onPress: () => void;
  country: Country;
}) {
  return (
    <CodeWrapper>
      <TouchableItem
        accessibilityLabel="Button"
        accessibilityTraits={'button'}
        accessibilityComponentType="button"
        onPress={onPress}
        delayPressIn={0}
        accessibilityRole="button">
        <CodeItemWrapper>
          <CodeImageWrapper>
            <Image
              resizeMode={'contain'}
              style={[
                {
                  borderColor: 'transparent',
                  height: '100%',
                  width: '100%',
                  borderRadius: 2,
                },
              ]}
              source={{uri: country.flag}}
            />
          </CodeImageWrapper>
          <CodeText>+{country.callingCode[0]}</CodeText>
        </CodeItemWrapper>
      </TouchableItem>
    </CodeWrapper>
  );
});

export default Code;
