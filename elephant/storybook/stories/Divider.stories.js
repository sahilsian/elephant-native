import Divider from '../../comps/Divider';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';

storiesOf('Generic', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Divider', () => (
    <Divider></Divider>
  ))