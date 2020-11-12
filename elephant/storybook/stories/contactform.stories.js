import { storiesOf } from '@storybook/react-native';
import React from 'react';
import FullView from './FullView';
import ContactForm from '../../comps/Pages/contactForm'

storiesOf('Pages', module)
  .addDecorator((getStory) => <FullView>{getStory()}</FullView>)
  .add('My Custom Form', () => (
    <ContactForm></ContactForm>
  ))
