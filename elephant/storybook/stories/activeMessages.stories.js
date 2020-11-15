import { storiesOf } from '@storybook/react-native';
import React from 'react';
import FullView from './FullView';
import MainTemplate from '../../comps/Pages/activeMessages'

storiesOf('Pages', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Active Messages', () => (
    <MainTemplate></MainTemplate>
  ))
