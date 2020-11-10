import { storiesOf } from '@storybook/react-native';
import React from 'react';
import SignupChoice from '../../comps/Pages/SignupChoice';
import FullView from './FullView';

storiesOf('Pages', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Signup Choice', () => (
    <SignupChoice></SignupChoice>
  ))
