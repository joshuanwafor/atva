import {ThemedStyledProps, DefaultTheme} from 'styled-components';
import {Platform, Dimensions} from 'react-native';

import {Colors, Fonts} from '../interface';
import {StyleProp, ViewStyle} from 'react-native';

const Scaler = {
  px: 'px',
  '%': '%',
};

export const sizeScale = (size: number, scale: keyof typeof Scaler) =>
  `${size}${scale}`;

type MapColorFromTheme = <T>(
  color: Colors,
) => (props: ThemedStyledProps<T, DefaultTheme>) => string;

export const getColorFromTheme: MapColorFromTheme = (color: Colors) => {
  return (props): string => props.theme.colors[color];
};

type MapFontFromTheme = <T>(
  font: Fonts,
) => (props: ThemedStyledProps<T, DefaultTheme>) => string;

export const getFontFromTheme: MapFontFromTheme = (font: Fonts) => {
  return (props): string => props.theme.font[font];
};

function chunkArray<T>(array: readonly T[] | null, size: number) {
  if (!array) {
    return [];
  }
  if (array?.length === 0) {
    return [];
  }
  return array?.reduce((acc, val) => {
    if (acc.length === 0) {
      // @ts-ignore
      acc.push([]);
    }
    const last = acc[acc.length - 1];
    // @ts-ignore
    if (last.length < size) {
      // @ts-ignore
      last.push(val);
    } else {
      // @ts-ignore
      acc.push([val]);
    }
    return acc;
  }, []);
}

function calculateDimensions({
  itemDimension,
  staticDimension,
  totalDimension,
  fixed,
  spacing,
}: {
  fixed?: boolean;
  totalDimension?: number;
  itemDimension?: number;
  staticDimension?: number;
  spacing?: number;
}) {
  const usableTotalDimension = staticDimension || totalDimension || 0;
  const availableDimension = usableTotalDimension - (spacing || 0);
  const itemTotalDimension = Math.min(
    (itemDimension || 0) + (spacing || 0),
    availableDimension,
  );
  const itemsPerRow = Math.floor(availableDimension / itemTotalDimension);
  const containerDimension = availableDimension / itemsPerRow;

  let fixedSpacing;
  if (fixed) {
    fixedSpacing =
      ((totalDimension || 0) - (itemDimension || 0) * itemsPerRow) /
      (itemsPerRow + 1);
  }

  return {
    itemTotalDimension,
    availableDimension,
    itemsPerRow,
    containerDimension,
    fixedSpacing,
  };
}

function generateStyles({
  itemDimension,
  containerDimension,
  spacing,
  fixed,
  horizontal,
  fixedSpacing,
}: {
  fixed?: boolean;
  horizontal?: boolean | null;
  fixedSpacing?: number;
  containerDimension?: number;
  itemDimension?: number;
  spacing?: number;
}) {
  let rowStyle: StyleProp<ViewStyle> = {
    flexDirection: 'row',
    paddingLeft: fixed ? fixedSpacing : spacing,
    paddingBottom: spacing,
  };

  let containerStyle: StyleProp<ViewStyle> = {
    flexDirection: 'column',
    justifyContent: 'center',
    width: fixed ? itemDimension : (containerDimension || 0) - (spacing || 0),
    marginRight: fixed ? fixedSpacing : spacing,
  };

  if (horizontal) {
    rowStyle = {
      flexDirection: 'column',
      paddingTop: fixed ? fixedSpacing : spacing,
      paddingRight: spacing,
    };

    containerStyle = {
      flexDirection: 'row',
      justifyContent: 'center',
      height: fixed
        ? itemDimension
        : (containerDimension || 0) - (spacing || 0),
      marginBottom: fixed ? fixedSpacing : spacing,
    };
  }

  return {
    containerStyle,
    rowStyle,
  };
}

/**
 * Format bytes in appropriate MB, KB, GB format
 * @external (https://stackoverflow.com/a/18650828/8193172)
 * @param bytes number
 * @param decimals number
 */
function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) {
    return '0 B';
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + '' + sizes[i];
}

export const getDefaultHeaderHeight = (statusBarHeight: number): number => {
  const layout = Dimensions.get('window');
  const isLandscape = layout.width > layout.height;

  let headerHeight;

  if (Platform.OS === 'ios') {
    if (isLandscape && !Platform.isPad) {
      headerHeight = 32;
    } else {
      headerHeight = 44;
    }
  } else if (Platform.OS === 'android') {
    headerHeight = 56;
  } else {
    headerHeight = 64;
  }

  return headerHeight + statusBarHeight;
};

export function getDefaultCoverHeight(statusBarHeight: number) {
  const {height} = Dimensions.get('window');
  const min = 64 + statusBarHeight;
  const max = Math.min(height - height / 3, 600);
  return {
    min,
    max,
    delta: max - min,
  };
}

export function getDefaultDetailsCoverHeight(statusBarHeight: number) {
  const {height} = Dimensions.get('window');
  const min = 64 + statusBarHeight;
  const max = Math.max(height - height / 3.5, 450);
  return {
    min,
    max,
    delta: max - min,
  };
}

function shuffleArray(array: any) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export {
  chunkArray,
  calculateDimensions,
  generateStyles,
  formatBytes,
  shuffleArray,
};

export function purgePlanRawPlanDescription(data: string) {
  let res = data.split('|').map((v, i) => {
    let trimmed = v.trim();
    let yesORNo = trimmed.substring(0, trimmed.lastIndexOf(':') + 1);
    let isFeatureEnabled: boolean = yesORNo == '::yes::' ? true : false;
    return trimmed.substring(trimmed.lastIndexOf(':') + 1, trimmed.length);
  });
}

export const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
