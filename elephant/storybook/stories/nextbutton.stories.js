import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import NextButton from '../../comps/NextButton'

storiesOf('Form', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom NextButton', () => (
    <NextButton></NextButton>
  ))
