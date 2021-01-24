import * as React from 'react';
import { AppStylesProvider } from '../src/styles/AppStylesProvider';
import { BaseDecorators } from '@storybook/addons';

export const decorators: BaseDecorators<any> = [
  (Story) => (
    <AppStylesProvider>
      <Story />
    </AppStylesProvider>
  ),
];
