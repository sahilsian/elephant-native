import React from 'react';
import { storiesOf } from '@storybook/react-native';
import FullView from './FullView';
import TopNavBar from '../../comps/topNabBar';

storiesOf('Navigation', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Top Navbar', () => (
    <TopNavBar></TopNavBar>
  ))
