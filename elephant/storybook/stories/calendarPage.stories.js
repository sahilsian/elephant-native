import React from 'react';
import { storiesOf } from '@storybook/react-native';
import FullView from './FullView';
import MainTemplate from '../../comps/Pages/maintemplate';
import CalendarPage from '../../comps/Pages/calendarPage';

storiesOf('Pages', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Calendar', () => (
    <CalendarPage></CalendarPage>
  ))
