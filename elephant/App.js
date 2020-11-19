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
import {StyleSheet, View} from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native'
import Start from './comps/Pages/Start';
import Login from './comps/Pages/Login';
import SignupChoice from './comps/Pages/SignupChoice';
import HomePage from './comps/Pages/homepage';
import MyProvider from './comps/context'

const App = () => {
  return (
    <MyProvider>

    <NativeRouter>
      <View style={styles.container}>
        <Switch>
        <Route exact path="/" component={Start}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={SignupChoice}></Route>
        <Route exact path="/home" component={HomePage}></Route>
        </Switch>
        {/* <Login></Login> */}
        {/* <SignupChoice></SignupChoice> */}
      </View>
    </NativeRouter>

    </MyProvider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
})

 export default App;

//export { default } from './storybook';
