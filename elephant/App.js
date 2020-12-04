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
import {StyleSheet, View, Animated, useWindowDimensions, SafeAreaView} from 'react-native';
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
import ApplicantInfo from './comps/Pages/applicantInfo';
import ContactForm from './comps/Pages/contactForm';
import FinishedSignup from './comps/Pages/FinishedSignup';
import CalendarPage from './comps/Pages/calendarPage';
import AnimatedStack from 'react-router-native-animate-stack';
import SettingsPage from './comps/Pages/settingsPage';
import {
  setCustomText,
} from 'react-native-global-props';

const customTextProps = {
  style: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Quicksand',
    color: 'black'
  }
};

const App = () => {

  setCustomText(customTextProps);

  // const enterAnimKit = new Animated.Value(0);
  // const exitAnimKit = new Animated.Value(0);
  // const width = useWindowDimensions().width;
  return (
    <MyProvider>
    <SafeAreaView style={styles.container}>
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path="/" component={Start}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={SignupChoice}></Route>
        <Route path={"/category/:name"} component={SubCategoryPage}></Route>
        <Route path={"/profile/:user"} component={ProfilePage}></Route>
        <Route path={"/caregiversignup"} component={CaregiverSignup}></Route>
        <Route path={"/caregiversignuptwo"} component={CaregiverSignupTwo}></Route>
        <Route path={"/caregiversignupthree"} component={CaregiverSignupThree}></Route>
        <Route path={"/applicantinfo"} component={ApplicantInfo}></Route>
        <Route path={"/contactform"} component={ContactForm}></Route>
        <Route path={"/finishedsignup"} component={FinishedSignup}></Route>
        <Route path={"/settings"} component={SettingsPage}></Route>
        {/* <AnimatedStack
            swipeCancelSpeed={50}
            swipeable={true}
            onMountAnimate={() => {
              Animated.timing(enterAnimKit, {
                toValue: 1,
                duration: 100
              }).start();
            }}
            onTransitionAnimate={({ location, action, isNestedRoute }) => {
              if (isNestedRoute) return;
              // Enter and exit or one only
              enterAnimKit.setValue(0);
              exitAnimKit.setValue(0);
  
              Animated.timing(enterAnimKit, {
                toValue: 1,
                duration: 500,
                delay: 200
              }).start();
  
              Animated.timing(exitAnimKit, {
                toValue: 1,
                duration: 500
              }).start();
            }}
            activedViewStyleHandler={({ location, action, isNestedRoute }) => {
              return {
                transform: [
                  {
                    translateX: enterAnimKit.interpolate({
                      inputRange: [0, 1],
                      outputRange: [width, 0]
                    })
                  }
                ]
              };
            }}
            deactivedViewStyleHandler={({ location, action, isNestedRoute }) => {
              return {
                transform: [
                  {
                    translateX: exitAnimKit.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -width]
                    })
                  }
                ]
              };
            }}
        > */}
          <Route path="/home" component={HomePage}></Route>
          <Route path={"/search/:subname"} component={Search}></Route>
          <Route path={"/calendarpage"} component={CalendarPage}></Route>
        {/* </AnimatedStack> */}

        {/* <Login></Login> */}
        {/* <SignupChoice></SignupChoice> */}
      </View>
    </NativeRouter>
    </SafeAreaView>
    </MyProvider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    fontFamily: "Quicksand",
    color: "#797b80"
  }
})



export default App;

//export { default } from './storybook';
