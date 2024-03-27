import React from 'react';
import { View } from 'react-native';

import SignupForm from '../features/auth/SignupForm';

const Signup = () => {
  return (
    <View style={{ width: '100%' }}>
      <SignupForm />
    </View>
  );
};

export default Signup;
