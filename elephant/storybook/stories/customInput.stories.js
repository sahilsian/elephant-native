import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import CustomInput from '../../comps/CustomInput'

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Input', () => (
    <CustomInput></CustomInput>
  ))
