import { storiesOf } from '@storybook/react-native';
import React from 'react';
import FullView from './FullView';
import EducatorSignup from '../../comps/Pages/EducatorSignup';

storiesOf('Pages', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Educator Signup', () => (
    <EducatorSignup></EducatorSignup>
  ))
