import React from 'react';

import { storiesOf } from '@storybook/react';

import { caps, CapsContainer } from '../lib/index';

storiesOf('Demos', module).add('Simple Alert', () => (
  <div>
    <CapsContainer />
    <button onClick={() => caps.alert('clicked')}>Show alert</button>
  </div>
));
