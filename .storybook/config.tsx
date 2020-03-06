import { addDecorator, configure } from '@storybook/react';
import React from 'react';
import { StoryFn } from '@storybook/addons';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { AppStylesProvider } from '../src/styles/AppStylesProvider';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

const BaseDecorator = (storyFn: StoryFn<StoryFnReactReturnType>) => (
  <AppStylesProvider>{storyFn()}</AppStylesProvider>
);
addDecorator(BaseDecorator);

configure(loadStories, module);
