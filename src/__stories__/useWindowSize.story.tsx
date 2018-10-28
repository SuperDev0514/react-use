import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {useWindowSize} from '..';
import ShowDocs from '../util/ShowDocs';

const Demo = () => {
  const {width, height} = useWindowSize();

  return (
    <div>
      <div>width: {width}</div>
      <div>height: {height}</div>
    </div>
  );
};

storiesOf('useWindowSize', module)
  .add('Docs', () => <ShowDocs md={require('../../docs/useWindowSize.md')} />)
  .add('Demo', () =>
    <Demo/>
  )
