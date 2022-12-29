// dependencies
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAll } from './src/services/captures'

// components
import Home from "./src/components/Home"
import Profile from "./src/components/Profile"
import SignUp from "./src/components/SignUp"
import Login from "./src/components/Login"
import CaptureVoting from "./src/components/CaptureVoting"
import Swipe from './src/components/Swipe'
import CameraView from "./src/components/CameraView"
import LoadScreen from './src/components/LoadScreen'

const Tab = createMaterialTopTabNavigator();

export default function App() {

  // keep track of if user is signed in
  const [userLoggedIn, setUserLoggedIn] = React.useState(false)

  // loading state (checking for user login token)
  const [isLoading, setIsLoading] = React.useState(true)

  // keep user email
  const [userID, setUserID] = React.useState(null)

  const getLogInData = async () => {
    try {
      const value = await AsyncStorage.getItem('userID')
      if (value !== null) {
        // value previously stored
        setUserID(value)
        setIsLoading(false)
        setUserLoggedIn(true)
      } else {
        setIsLoading(false)
        setUserID(null)
        setUserLoggedIn(false)
      }
    } catch(error) {
      // error reading value
      console.log(error)
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    // get from local storage
    if (userID == null) {
      getLogInData()
    }
  })

  if (isLoading) {
    return (<LoadScreen />)
  }

  // if signed in, return app
  else if (userLoggedIn) {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Camera' screenOptions={{
          tabBarStyle: {
            height: 0,
          }
          }}>
          <Tab.Screen name="CaptureVoting" children={() => <CaptureVoting voterID={userID} />} />
          <Tab.Screen name="Camera" children={()=><CameraView loginCallback={getLogInData} userID={userID} />} />
          <Tab.Screen name="Profile" children={()=><Profile userID={userID} />} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  // else, return log in page
  else {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName='LogIn' screenOptions={{
          tabBarStyle: {
            height: 0,
          }
          }}>
          <Tab.Screen name="SignUp" component={SignUp} />
          <Tab.Screen name="LogIn" children={()=><Login loginCallback={getLogInData} />} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
