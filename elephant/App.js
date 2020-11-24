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
import MyProvider from './comps/context';
import SubCategoryPage from './comps/Pages/subcategories'
import Search from './comps/Pages/Search';
import ProfilePage from './comps/Pages/profilepage';
import CaregiverSignup from './comps/Pages/caregiverSignup';
import CaregiverSignupTwo from './comps/Pages/caregiverSignupTwo';
import CaregiverSignupThree from './comps/Pages/caregiverSignupThree';


const App = () => {
  return (
    <MyProvider>

    <NativeRouter>
      <View style={styles.container}>
        <Switch>
        <Route exact path="/" component={Start}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={SignupChoice}></Route>
        <Route path="/home" component={HomePage}></Route>
        <Route path={"/category/:name"} component={SubCategoryPage}></Route>
        <Route path={"/search/:subname"} component={Search}></Route>
        <Route path={"/profile/:user"} component={ProfilePage}></Route>
        <Route path={"/caregiversignup"} component={CaregiverSignup}></Route>
        <Route path={"/caregiversignuptwo"} component={CaregiverSignupTwo}></Route>
        <Route path={"/caregiversignupthree"} component={CaregiverSignupThree}></Route>
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
