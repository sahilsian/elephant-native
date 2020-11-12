import React from 'react';
import { storiesOf } from '@storybook/react-native';
import FullView from './FullView';
import MainTemplate from '../../comps/Pages/maintemplate';

storiesOf('Pages', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Main Template', () => (
    <MainTemplate></MainTemplate>
  ))
