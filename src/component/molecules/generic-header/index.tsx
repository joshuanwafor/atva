import {HStack, VStack, Box} from 'native-base';
import React from 'react';
import {AppTypographySemiBoldMd} from '../../atoms/typographyv2';

type TSectionHeaderProps = {
  title: string;
  hasFocus?: boolean;
  onMore?: () => void;
  right?: React.ReactNode;
};
export function SectionHeaderComp({title, onMore, right}: TSectionHeaderProps) {
  return (
    <HStack alignItems={'center'} justifyContent="space-between" px="12px">
      <VStack space="2">
        <AppTypographySemiBoldMd>{title}</AppTypographySemiBoldMd>
        <Box w={'100px'} bg="orange.500" h="2px"></Box>
      </VStack>
      {right}
    </HStack>
  );
}

// section header wih light gray
export function SectionHeaderMinimalComp({
  title,
  right,
  hasFocus,
}: TSectionHeaderProps) {
  return (
    <HStack
      alignItems={'center'}
      justifyContent="space-between"
      p="12px"
      py="16px"
      bg={'#F7F7F7'}>
      <AppTypographySemiBoldMd color={'blueGray.800'}>
        {title}
      </AppTypographySemiBoldMd>
      {right}
    </HStack>
  );
}

//section header with primary bg color
export function SectionHeaderFancyComp({title}: TSectionHeaderProps) {
  return (
    <AppTypographySemiBoldMd
      p="8px"
      bg={'orange.500'}
      color="white"
      textAlign={'center'}>
      {title}
    </AppTypographySemiBoldMd>
  );
}
