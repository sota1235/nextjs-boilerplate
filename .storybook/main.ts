import { StorybookConfig } from '@storybook/core/types/index';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  typescript: {
    check: false,
  },
  webpackFinal: async (config) => {
    const { resolve } = config;
    const alias = resolve?.alias || {};
    alias['core-js/modules'] = '@storybook/core/node_modules/core-js/modules';
    alias['core-js/features'] = '@storybook/core/node_modules/core-js/features';

    if (resolve) {
      resolve.alias = alias;
      config.resolve = resolve;
    } else {
      config.resolve = {
        alias,
      };
    }

    return config;
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
