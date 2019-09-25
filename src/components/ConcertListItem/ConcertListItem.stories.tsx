import * as React from 'react';
import { ConcertListItem } from './ConcertListItem';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('components/ConcertListItem', module);

stories.add('default', () => {
  return (
    <ConcertListItem
      title="title"
      thumbnailURL="https://i.gyazo.com/45f12d6808968f95e27d959cc5ab34e4.png"
      description="This concert will be a great show, I can promise you."
    />
  );
});
