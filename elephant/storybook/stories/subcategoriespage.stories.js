import React from 'react';
import { storiesOf } from '@storybook/react-native';
import FullView from './FullView';
import SubCategoryPage from '../../comps/Pages/subcategories';

storiesOf('Pages', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom SubCategories Page', () => (
    <SubCategoryPage></SubCategoryPage>
  ))
