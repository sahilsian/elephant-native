import React from 'react';
import Message from '../comps/Message';

export default {
  title: 'Example/Message',
  component: Message
};

export const Message1 = () => <Message backgroundColor={'#5C80BC'} />;
export const Message2 = () => <Message backgroundColor={'#E1E1E1'} />;