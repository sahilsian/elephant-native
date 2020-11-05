import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import ContactForm from '../../comps/contactForm'

storiesOf('Form', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Form', () => (
    <ContactForm></ContactForm>
  ))
