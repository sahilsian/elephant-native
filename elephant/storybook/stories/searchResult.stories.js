import { storiesOf } from '@storybook/react-native';
import React from 'react';
import SearchResult from '../../comps/searchResult';
import FullView from './FullView';


storiesOf('Generic', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Search Result', () => (
    <SearchResult></SearchResult>
  ))
