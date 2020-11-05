import MessageConnected from '../../comps/MessageConnected';
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';

storiesOf('Chat', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Message Connected', () => (
    <MessageConnected></MessageConnected>
  ))
