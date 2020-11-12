import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import AuthLogin from '../../comps/authLogin';


storiesOf('Form', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom AuthLogin', () => (
    <AuthLogin></AuthLogin>
  ))
