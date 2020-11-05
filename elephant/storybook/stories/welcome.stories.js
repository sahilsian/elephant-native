import React from 'react';
import { storiesOf } from '@storybook/react-native';
import FullView from './FullView';
import WelcomeComp from '../../comps/Welcome';

storiesOf('Text', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Welcome', () => (
    <WelcomeComp></WelcomeComp>
  ))
