/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MyTestComp from './comps/Test';
// import Active from './comps/Pages/activeMessages'
import {View} from 'react-native';
import MainTemplate from './comps/Pages/activeMessages';

const App = () => {
  return (
    <View>
      <MainTemplate />
      {/* <MyTestComp /> */}
    </View>
  )
}

// export default App;

export { default } from './storybook';
