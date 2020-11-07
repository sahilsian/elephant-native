import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import RadioButtons from '../../comps/radioButtons';

storiesOf('Form', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Radio Buttons', () => (
    <RadioButtons></RadioButtons>
  ))
