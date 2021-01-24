import { StorybookConfig } from '@storybook/core/types/index';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  typescript: {
    check: false,
  },
  // @ts-ignore
  babel: async (options) => ({
    ...options,
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
    ],
  }),
};

export default config;
