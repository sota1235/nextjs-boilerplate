// Theme for styled-components
import { DefaultTheme } from 'styled-components';
import { small, middle, large } from './breakpoints';

export const theme: DefaultTheme = {
  colors: {
    text: '#434343',
    border: {
      normal: '#9b9b9b',
      hover: '#067df7',
    },
  },
  card: {
    colors: {
      primary: '#067df7',
    },
  },
  breakPoints: {
    small,
    middle,
    large,
  },
};
