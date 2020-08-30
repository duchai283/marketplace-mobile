import React, { useState } from 'react'
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
import images from '../../../../Themes/Images'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PasswordInput from '../../../../components/PasswordInput'
import { Button, Label } from 'native-base'
import { showError, showSuccess } from '../../../../utils/notification'
import { config } from 'global_config'
import AsyncStorage from '@react-native-community/async-storage'

const LoginSchema = Yup.object().shape({
  password: Yup.string().required('This field is require')
})

const Login = ({ navigation, route }) => {
  const [isHidden, setHidden] = useState(false)
  const handleForgotPass = () => {}
  const email = route.params.email
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <FastImage
        source={images.background}
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: 120,
          paddingHorizontal: 20
        }}
        resizeMode={'cover'}
      >
        <View>
          <Formik
            initialValues={{
              password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={async values => {
              const payload = {
                email: email,
                password: values.password
              }
              const res = await fetch(`${config.apiUrl}/auth/login`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
              })
              const data = await res.json()
              if (data.errors) {
                return showError(data.errors.message)
              }
              await AsyncStorage.setItem('token', data.token)
              const res2 = await fetch(`${config.apiUrl}/customers/me`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: data.token
                }
              })
              const data2 = await res2.json()
              await AsyncStorage.setItem('user', JSON.stringify(data2.user))
              showSuccess('Login SuccessFul!')
              navigation.navigate('Home')
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
              <KeyboardAwareScrollView
                contentContainerStyle={styles.body}
                scrollEnabled={false}
              >
                <View style={{ marginBottom: 53 }}>
                  <Text style={[styles.textWelcome]}>Welcome back</Text>
                  <Text style={[styles.textWelcome]}>
                    {email.split('@')[0]}!
                  </Text>
                </View>
                <View style={{ marginBottom: 8 }}>
                  <Text style={[styles.textEnter]}>Enter Your password</Text>
                </View>
                <PasswordInput
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  onPressHidden={() => setHidden(!isHidden)}
                  isHidden={isHidden}
                  errors={errors.password}
                  touched={touched.password}
                />
                {errors.password && touched.password && (
                  <Label
                    ldErrorInput
                    style={{ marginTop: 15, color: '#EB5757' }}
                  >
                    {errors.password}
                  </Label>
                )}

                <View style={{ marginTop: 40, width: '100%' }}>
                  <Button
                    block
                    success
                    style={styles.btn}
                    onPress={handleSubmit}
                    accessibilityLabel="login_btn"
                  >
                    <Text style={[styles.btnText, styles.btnLogin]}>Login</Text>
                  </Button>
                </View>
              </KeyboardAwareScrollView>
            )}
          </Formik>
        </View>
      </FastImage>
    </>
  )
}

export default Login
