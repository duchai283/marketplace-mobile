import React, { useState, useEffect } from 'react'
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
import { styles } from './styles'
// import images from '../../../../Themes/Images';
import images from 'Themes/Images'
import { config } from 'global_config'
import AsyncStorage from '@react-native-community/async-storage'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('This email is not correct')
    .required('This field is require')
})

const EntryPage = ({ navigation }) => {
  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        navigation.navigate('Home')
      }
    })
  }, [])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <FastImage
        source={images.background}
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 60,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 8
        }}
        resizeMode={'cover'}
      >
        <View style={{ marginTop: 46 }}>
          <View style={{ marginBottom: 16 }}>
            <Text style={styles.place}>
              Enter Email address to Login or Register
            </Text>
          </View>
          <Formik
            initialValues={{
              email: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={async values => {
              try {
                const res = await fetch(`${config.apiUrl}/auth/isValidEmail`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(values)
                })

                const data = await res.json()
                if (!data.hasEmail) {
                  return navigation.navigate('SignUpPage', {
                    email: values.email
                  })
                }
                navigation.navigate('LoginPage', { email: values.email })
              } catch (error) {
                console.log('err', error)
              }
            }}
          >
            {({
              touched,
              errors,
              values,
              handleChange,
              handleBlur,
              handleSubmit
            }) => (
              <React.Fragment>
                <View style={styles.wrapper}>
                  <TextInput
                    accessibilityLabel="email_input"
                    style={[
                      styles.input,
                      errors.email && touched.email ? styles.warning : null
                    ]}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity
                    accessibilityLabel="login_arrow_icon"
                    style={styles.next}
                    onPress={handleSubmit}
                  >
                    <FastImage
                      style={{ width: 25, height: 25 }}
                      source={images.arrow_circle_right}
                      resizeMode={'cover'}
                    />
                  </TouchableOpacity>
                  {errors.email && touched.email && (
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'red',
                        marginTop: 10
                      }}
                      ldErrorInput
                    >
                      {errors.email}
                    </Text>
                  )}
                </View>
              </React.Fragment>
            )}
          </Formik>
          <View style={styles.section}>
            <View style={[styles.line, styles.left]} />
            <Text style={styles.text}>MarketPlace</Text>
            <View style={[styles.line, styles.right]} />
          </View>
        </View>
      </FastImage>
    </>
  )
}

export default EntryPage
