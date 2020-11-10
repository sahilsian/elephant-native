import React from 'react';
import { storiesOf } from '@storybook/react-native';
import FullView from './FullView';
import NavBar from '../../comps/NavBar';

storiesOf('Navigation', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Nav Bar', () => (
    <NavBar></NavBar>
  ))
