import { storiesOf } from '@storybook/react-native';
import React from 'react';
import ApplicantInfo from '../../comps/Pages/applicantInfo';
import FullView from './FullView';

storiesOf('Pages', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Applicant Info', () => (
    <ApplicantInfo></ApplicantInfo>
  ))
