import React from 'react';
import { storiesOf } from '@storybook/react-native';
import FullView from './FullView';
import Calendar from '../../comps/calendar';

storiesOf('Generic', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Calendar', () => (
    <Calendar></Calendar>
  ))
