import React from 'react';
import CaregiverSignupBanner from '../comps/CaregiverSignup';
import Message from '../comps/Message';

export default {
  title: 'Example/CaregiverSignupBanner',
  component: CaregiverSignupBanner
};

export const BasicsCaregiverSignupBanner = () => <CaregiverSignupBanner/>;
export const BasicsMessage = () => <Message text={"Let's get started"}/>;
