import React from 'react'
import FastImage from 'react-native-fast-image'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import images from '../../Themes/Images'

import HomeLayout from './screens/HomeLayout'
import Account from './screens/Account'
import Scanning from './screens/Scanning'
import CartPage from './screens/CartPage'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
const CartStack = ({ navigation, route }) => {
  if (route.params && route.params.screen === 'ScanningPage') {
    navigation.setOptions({ tabBarVisible: false })
  } else {
    navigation.setOptions({ tabBarVisible: true })
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'CartPage'
      }}
    >
      <Stack.Screen name="CartPage" component={CartPage} />
      <Stack.Screen name="ScanningPage" component={Scanning} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const Home = ({ navigation }) => {
  return (
    <Tab.Navigator
      lazy={true}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const style = {
            HomeLayout: { width: 28, height: 24 },
            Cart: { width: 28, height: 24 },
            Account: { width: 24, height: 24 }
          }
          const activeIcons = {
            HomeLayout: images.home_active,
            Cart: images.cart_active,
            Account: images.account_active
          }
          const icons = {
            HomeLayout: images.home,
            Cart: images.cart,
            Account: images.account
          }

          return (
            <FastImage
              source={focused ? activeIcons[route.name] : icons[route.name]}
              style={style[route.name]}
            />
          )
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        activeTintColor: '#83B151',
        inactiveTintColor: 'gray',
        lazy: true,
        swipeEnabled: false,
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          height: 60
        }
      }}
    >
      <Tab.Screen
        name="HomeLayout"
        component={HomeLayout}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ tabBarLabel: 'Account' }}
      />
    </Tab.Navigator>
  )
}

export default Home
