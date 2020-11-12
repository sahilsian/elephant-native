import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import Interests from '../../comps/Interests'

storiesOf('Form', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Interests', () => (
    <Interests></Interests>
  ))
