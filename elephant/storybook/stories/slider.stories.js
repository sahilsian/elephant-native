import { storiesOf } from '@storybook/react-native';
import React from 'react';
import FullView from './FullView';
import Slider from '../../comps/slider';
import SliderComp from '../../comps/slider';

storiesOf('Generic', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Slider', () => (
    <SliderComp></SliderComp>
  ))
