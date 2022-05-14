import { ConcertListItem } from './ConcertListItem';
import { Meta } from '@storybook/react';

export default {
  title: 'components/ConcertListItem',
  component: ConcertListItem,
} as Meta;

export const Primary = () => (
  <ConcertListItem
    title="title"
    thumbnailURL="https://i.gyazo.com/45f12d6808968f95e27d959cc5ab34e4.png"
    description="This concert will be a great show, I can promise you."
  />
);
