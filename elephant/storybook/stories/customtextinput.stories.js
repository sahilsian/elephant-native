import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import CustomTextInput from '../../comps/CustomTextInput'

storiesOf('Form', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom TextInput', () => (
    <CustomTextInput></CustomTextInput>
  ))
