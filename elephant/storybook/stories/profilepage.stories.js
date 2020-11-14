import React from 'react';
import { storiesOf } from '@storybook/react-native';
import FullView from './FullView';
import ProfilePage from '../../comps/Pages/profilepage';

storiesOf('Pages', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Profile Page', () => (
    <ProfilePage></ProfilePage>
  ))
