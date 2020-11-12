import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import CustomInput from '../../comps/CustomInput'

storiesOf('Form', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Input', () => (
    <CustomInput></CustomInput>
  ))
