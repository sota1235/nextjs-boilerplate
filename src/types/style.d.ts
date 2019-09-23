// import original module declarations
import 'styled-components';

// and extend them!
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
  }
}
