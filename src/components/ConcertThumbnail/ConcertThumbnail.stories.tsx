import * as React from 'react';
import { ConcertThumbnail } from './ConcertThumbnail';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('components/ConcertThumbnail', module);

stories
  .add('default', () => {
    return (
      <ConcertThumbnail
        title="sample"
        thumbnailURL="https://i.gyazo.com/45f12d6808968f95e27d959cc5ab34e4.png"
      />
    );
  })
  .add('invalid image URL', () => {
    return <ConcertThumbnail title="invalid url" thumbnailURL="broken_url" />;
  });
