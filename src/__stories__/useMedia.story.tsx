import {storiesOf} from '@storybook/react';
import * as React from 'react';
import {useMedia} from '..';

const Demo = () => {
  const isWide = useMedia('(min-width: 480px)');

  return (
    <div>
      Screen is wide: {isWide ? 'Yes' : 'No'}
    </div>
  );
};

storiesOf('useMedia', module)
  .add('Example', () =>
    <Demo/>
  )
