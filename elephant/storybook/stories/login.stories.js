import { storiesOf } from '@storybook/react-native';
import React from 'react';
import FullView from './FullView';
import Login from '../../comps/Pages/Login';

storiesOf('Pages', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Login', () => (
    <Login></Login>
  ))
