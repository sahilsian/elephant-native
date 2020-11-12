import React from 'react';
import Message from '../../comps/Message';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';

storiesOf('Chat', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Message', () => (
    <Message></Message>
  ))
