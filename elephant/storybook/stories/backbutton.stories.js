import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import BackButton from '../../comps/BackButton';


storiesOf('Form', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom BackButton', () => (
    <BackButton></BackButton>
  ))
