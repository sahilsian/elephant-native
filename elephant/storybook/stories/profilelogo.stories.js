import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import ProfileLogo from '../../comps/ProfileLogo';

storiesOf('Generic', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Profile Logo', () => (
    <ProfileLogo></ProfileLogo>
  ))
