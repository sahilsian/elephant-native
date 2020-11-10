import React from 'react';
import { storiesOf } from '@storybook/react-native';
import FullView from './FullView';
import HomePage from '../../comps/Pages/homepage';

storiesOf('Pages', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Homepage', () => (
    <HomePage></HomePage>
  ))
