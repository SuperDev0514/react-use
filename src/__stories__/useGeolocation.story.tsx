import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {useGeolocation} from '..';
import ShowDocs from '../util/ShowDocs';

const Demo = () => {
  const state = useGeolocation();

  return (
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};

storiesOf('useGeolocation', module)
  .add('Docs', () => <ShowDocs md={require('../../docs/useGeolocation.md')} />)
  .add('Demo', () =>
    <Demo/>
  )
