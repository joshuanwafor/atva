import React from 'react';
import {Text, ITextProps, Heading, IHeadingProps} from 'native-base';
import {TextProps} from 'react-native';

export const AppTypography: React.FC<{} & ITextProps> = props => {
  return <Text fontWeight={'100'} fontSize={12} {...props} />;
};

export const AppTypographySB: React.FC<{} & ITextProps> = props => {
  return <Text fontWeight={'300'} fontSize={12} {...props} />;
};

export const AppTypographyB: React.FC<{} & ITextProps> = props => {
  return <Text fontWeight={'400'} fontSize={18} {...props} />;
};

export const AppTypographyMd: React.FC<{} & ITextProps> = props => {
  return <Text fontWeight={'200'} fontSize={12} {...props} />;
};

export const AppTypographySemiBold: React.FC<{} & IHeadingProps> = props => {
  return <Heading fontWeight={'400'} fontSize={20} {...props} />;
};

export const AppTypographySemiBoldSm: React.FC<{} & IHeadingProps> = props => {
  return <Heading fontWeight={'400'} fontSize={18} {...props} />;
};

export const AppTypographySemiBoldMd: React.FC<{} & IHeadingProps> = props => {
  return <Heading fontWeight={'400'} fontSize={16} {...props} />;
};

export const AppTypographySemiBoldReg: React.FC<{} & IHeadingProps> = props => {
  return <Heading fontWeight={'400'} fontSize={14} {...props} />;
};

export const AppTypographyHeading: React.FC<{} & IHeadingProps> = props => {
  return <Heading {...props} fontWeight={'500'} />;
};
