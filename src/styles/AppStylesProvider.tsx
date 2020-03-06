import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { PropsWithChildren } from 'react';

const AppStylesProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export { AppStylesProvider };
