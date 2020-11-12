import { storiesOf } from '@storybook/react-native';
import React from 'react';
import FullView from './FullView';
import StartoutPage from '../../comps/Pages/sampleStartoutPage';

storiesOf('Pages', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Startout', () => (
    <StartoutPage></StartoutPage>
  ))
