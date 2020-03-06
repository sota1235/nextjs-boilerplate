import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import React from 'react';
import { StoryFn } from '@storybook/addons';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

const BaseDecorator = (storyFn: StoryFn<StoryFnReactReturnType>) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);
addDecorator(BaseDecorator);

configure(loadStories, module);
