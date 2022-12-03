import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './GlobalStyle';

type Props = {
  children: React.ReactNode;
}

const AppStylesProvider: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export { AppStylesProvider };
