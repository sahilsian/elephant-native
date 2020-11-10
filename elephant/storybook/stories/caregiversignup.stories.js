import { storiesOf } from '@storybook/react-native';
import React from 'react';
import FullView from './FullView';
import CaregiverSignup from '../../comps/Pages/caregiverSignup';

storiesOf('Pages', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Caregiver Signup', () => (
    <CaregiverSignup></CaregiverSignup>
  ))
