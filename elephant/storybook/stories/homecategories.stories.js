import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import Categories from '../../comps/Categories'

storiesOf('Generic', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Home', () => (
      <Categories></Categories>
  ))