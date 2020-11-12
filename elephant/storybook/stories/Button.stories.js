import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import Button from '../../comps/Button';


storiesOf('Form', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Button', () => (
    <Button></Button>
  ))
