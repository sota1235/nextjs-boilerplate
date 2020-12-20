import { StorybookConfig } from '@storybook/core/types/index';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  typescript: {
    check: false,
  },
};

export default config;
