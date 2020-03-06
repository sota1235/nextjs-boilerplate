import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      border: {
        normal: string;
        hover: string;
      };
    };
    card: {
      colors: {
        primary: string;
      };
    };
    breakPoints: {
      small: string;
      middle: string;
      large: string;
    };
  }
}
