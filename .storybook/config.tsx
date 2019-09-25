import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import React from 'react';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

const BaseDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);
addDecorator(BaseDecorator);

configure(loadStories, module);
