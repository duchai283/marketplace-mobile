import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Root } from 'native-base'
import Auth from './src/containers/Auth'
import Home from './src/containers/Home'
import AppSplashScreen from 'containers/SplashScreen'
const Stack = createStackNavigator()

const App = () => {
  return (
    <Root>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            initialRouteName: 'AppSplashScreen'
          }}
        >
          <Stack.Screen name="AppSplashScreen" component={AppSplashScreen} />
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Root>
  )
}

export default App
