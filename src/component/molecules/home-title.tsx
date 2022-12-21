import * as React from 'react';
import {Divider, HStack} from 'native-base';
import {AppTypography, AppTypographyB} from '../atoms/typographyv2';

function HomeTitle({title}: {title: string}) {
  return (
    <HStack alignItems={'center'} space={'2'} px="12px" py="8px">
      <AppTypographyB>{title}</AppTypographyB>
    </HStack>
  );
}

export default HomeTitle;
