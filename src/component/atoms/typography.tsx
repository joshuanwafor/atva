import styled from 'styled-components/native';
import {ms, s} from 'react-native-size-matters';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../utils';
import {theme} from '../../style/theme';
import React from 'react';
import {Text, View, StyleSheet, TextStyle, TextProps} from 'react-native';

export const SParagraph = styled.Text<{hasPadding?: boolean}>`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(14, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('white')};
  margin-bottom: 5px;
`;

export const ATitle = styled.Text`
  font-family: ${getFontFromTheme('demiBold')};
  font-size: ${sizeScale(ms(18, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('white')};
`;

type TType = TextProps & {};

let styles = StyleSheet.create({
  heading: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'AvenirNext-DemiBold',
  },
  sectionHeading: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'AvenirNext-Medium',
  },
  body: {
    fontSize: 14,
    fontFamily: 'AvenirNext-Regular',
    color: '#fff',
  },
});

export const AppTypographyBody: React.FC<TType> = (props) => {
  let style: TextProps['style'] = {
    ...styles.body,
  };
  if (typeof props.style == 'object') {
    let temp = style;
    style = props.style;
    style = {...temp, ...style};
  }
  return <Text {...props} style={{...style}} />;
};

export const AppTypographyHeading: React.FC<TType> = (props) => {
  let style: TextProps['style'] = {
    ...styles.heading,
  };
  if (typeof props.style == 'object') {
    let temp = style;
    style = props.style;
    style = {...temp, ...style};
  }
  return <Text {...props} style={style} />;
};

export const AppTypographySubHeading: React.FC<TType> = (props) => {
  let style: TextProps['style'] = {
    ...styles.sectionHeading,
  };
  if (typeof props.style == 'object') {
    let temp = style;
    style = props.style;
    style = {...temp, ...style};
  }
  return <Text {...props} style={style} />;
};
