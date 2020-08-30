import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import EntryPage from './screens/EntryPage/index';
import Login from './screens/Login';
import SignUp from './screens/Signup';

const Stack = createStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'EntryPage',
      }}>
      <Stack.Screen name="EntryPage" component={EntryPage} />
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="SignUpPage" component={SignUp} />
    </Stack.Navigator>
  );
};

export default Auth;
