import { storiesOf } from '@storybook/react-native';
import React from 'react';
import FullView from './FullView';
import CaregiverSignupTwo from '../../comps/Pages/caregiverSignupTwo';

storiesOf('Pages', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Caregiver Signup 2', () => (
    <CaregiverSignupTwo></CaregiverSignupTwo>
  ))
