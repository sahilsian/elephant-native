import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import Header from '../../comps/Header';

storiesOf('Text', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Header', () => (
    <Header></Header>
  ))
