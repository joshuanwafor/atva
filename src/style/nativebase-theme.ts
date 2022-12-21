import {extendTheme} from 'native-base';
import React from 'react';

export const theme = extendTheme({
  useSystemColorMode: false,
  initialColorMode: 'dark',
  fontConfig: {
    Proxima: {
      100: {
        normal: 'AvenirNext-Regular',
      },
      200: {
        normal: 'AvenirNext-Medium',
      },
      300: {
        normal: 'AvenirNext-DemiBold',
      },
      400: {
        normal: 'AvenirNext-Bold',
      },
      500: {
        normal: 'Caladea-Regular',
      },
    },
  },
  colors: {
    sec: {
      100: '#D1D2D4',
      200: '#B2B5B8',
      300: '#8B9095',
      400: '#646A71',
      500: '#3E454E',
      600: '#17202A',
      700: '#131B23',
      800: '#0F151C',
      900: '#0C1015',
      1000: '#080B0E',
      1100: '#050608',
    },

  },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
  fonts: {
    heading: 'Proxima',
    body: 'Proxima',
    mono: 'Proxima',
  },
  components: {
    Button: {
      baseStyle: {
        background: 'appprimary.900',
      },
      defaultProps: {
        colorScheme: 'green',
      },
      variants: {
        bold: {},
      },
    },
    Input: {
      baseStyle: {
        rounded: 'sm',
        paddingTop: '8px',
        paddingBottom: '8px',
      },
      defaultProps: {
        colorScheme: 'green',
      },
    },
  },
});

type CustomThemeType = typeof theme;

// Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
