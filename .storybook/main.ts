import { StorybookConfig } from '@storybook/types';
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  typescript: {
    check: false
  },
  framework: '@storybook/react-vite',
  babel: async options => ({
    ...options,
    presets: [['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: 3
    }]]
  }),
  docs: {
    docsPage: 'automatic'
  }
};
export default config;
