import { storiesOf } from '@storybook/react-native';
import React from 'react';
import FullView from './FullView';
import Start from '../../comps/Pages/Start';

storiesOf('Pages', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Login', () => (
    <Start></Start>
  ))
