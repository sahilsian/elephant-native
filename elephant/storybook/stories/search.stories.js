import { storiesOf } from '@storybook/react-native';
import React from 'react';
import FullView from './FullView';
import Search from '../../comps/Pages/Search';

storiesOf('Pages', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Search', () => (
    <Search></Search>
  ))
