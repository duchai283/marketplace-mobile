import React, { useEffect, useState } from 'react'
import SplashScreenLoaderIndicator from 'components/SplashScreenLoaderIndicator'

import { View } from 'native-base'

import FastImage from 'react-native-fast-image'
import images from 'Themes/Images'
import styles from './styles'
import AsyncStorage from '@react-native-community/async-storage'

const AppSplashScreen = props => {
  const [token, setToken] = useState(null)
  useEffect(() => {
    const { navigation } = props
    AsyncStorage.getItem('token').then(token => {
      setToken(token)
      if (token) {
        setTimeout(() => {
          navigation.navigate('Home')
        }, 1500)
      } else {
        setTimeout(() => {
          navigation.navigate('Auth')
        }, 1500)
      }
    })
  }, [token])
  return (
    <View style={styles.viewStyles}>
      <FastImage
        style={styles.launchScreen}
        source={images.launchScreen}
        resizeMode={'cover'}
      />
      <SplashScreenLoaderIndicator transparent />
    </View>
  )
}

export default AppSplashScreen
