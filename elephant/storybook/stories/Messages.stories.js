import { storiesOf } from '@storybook/react-native';
import React from 'react';
import FullView from './FullView';
import Messages from '../../comps/Pages/Messages';

storiesOf('Chat', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Messages', () => (
    <Messages></Messages>
  ));
