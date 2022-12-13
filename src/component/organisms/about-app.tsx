import * as React from 'react';
import styled from 'styled-components/native';
import {s, ms} from 'react-native-size-matters';
import {getBuildNumber, getDeviceName} from 'react-native-device-info';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../utils';

const Wrapper = styled.View`
  justify-content: center;
  margin-top: ${sizeScale(s(20), 'px')};
`;

const Text = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  text-align: center;
  color: ${getColorFromTheme('brownishGrey')};
  margin-bottom: 5px;
`;

function AboutApp() {
  const [deviceName, setDeviceName] = React.useState('');
  React.useLayoutEffect(() => {
    getDeviceName().then((name) => {
      setDeviceName(name);
    });
  }, []);
  return (
    <Wrapper>
      <Text>{`Version: ${getBuildNumber()}`}</Text>
      <Text>{`Device name: ${deviceName}`}</Text>
    </Wrapper>
  );
}

export default AboutApp;
