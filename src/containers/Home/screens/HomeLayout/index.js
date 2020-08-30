import React from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import FastImage from 'react-native-fast-image'
import CameraButton from './cameraButton'
import images from '../../../../Themes/Images'
import { styles } from './styles'
const HomeLayout = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <FastImage
        source={images.background_below}
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: 120,
          paddingHorizontal: 20,
          alignItems: 'center'
        }}
        resizeMode={'cover'}
      >
        <View style={styles.scanZoneWrapped}>
          <View style={styles.column}>
            <Text style={styles.startScanText}>START SCANNING!</Text>
            <Text style={styles.scanGoText}>Scan, Pay, & Go!</Text>
            <View style={styles.arrowDownGreen} />
            <CameraButton
              onPress={() => {
                navigation.navigate('Cart', { screen: 'ScanningPage' })
              }}
            />
          </View>
        </View>
      </FastImage>
    </>
  )
}

export default HomeLayout
