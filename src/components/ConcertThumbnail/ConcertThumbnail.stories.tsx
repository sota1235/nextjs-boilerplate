import { ConcertThumbnail } from './ConcertThumbnail';
import { Meta } from '@storybook/react';

export default {
  title: 'components/ConcertThumbnail',
  component: ConcertThumbnail,
} as Meta;

export const Primary = () => (
  <ConcertThumbnail
    title="sample"
    thumbnailURL="https://i.gyazo.com/45f12d6808968f95e27d959cc5ab34e4.png"
  />
);

export const InvalidImageURL = () => (
  <ConcertThumbnail title="invalid url" thumbnailURL="broken_url" />
);
