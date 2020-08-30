import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import FastImage from 'react-native-fast-image'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar
} from 'react-native'
import PasswordInput from '../../../../components/PasswordInput'
import { Button, Text as NativeText, Label } from 'native-base'
import { styles } from './styles'
import images from '../../../../Themes/Images'
import { showError, showSuccess } from '../../../../utils/notification'

const SignUpSchemaWithoutMembership = Yup.object().shape({
  password: Yup.string().required('This field is require'),
  confirmPass: Yup.string().required('This field is require')
})

const SignUp = ({ navigation, route }) => {
  const [state, setState] = useState({
    isShowPassword: false,
    isShowConfirmPassword: false,
    minOneUpperCase: false,
    minLowerCase: false,
    atLeastOneNumber: false,
    moreThanEightNumber: false,
    passwordMatch: false,
    isSubscribe: false,
    errors: {}
  })

  const onChangePassword = async (text, props) => {
    const { setFieldValue, values } = props
    let isMinLowerCase = false
    let isMinOneUpperCase = false
    let isAtLeastOneNumber = false
    let isMoreThanEightNumber = false
    let passwordErrorMessage
    let confirmPasswordErrorMessage
    let isPasswordMatch = false
    let { errors } = state

    // use positive look ahead to see if at least one upper case letter exists
    const haveOnUpercase = /(?=.*[A-Z])/
    if (haveOnUpercase.test(text)) {
      isMinOneUpperCase = true
    } else {
      passwordErrorMessage =
        'The password must be have at least one upper case.'
    }

    // use positive look ahead to see if at least one lower case letter exists
    const atleastLowCase = /(?=.*[a-z])/
    if (atleastLowCase.test(text)) {
      isMinLowerCase = true
    } else {
      passwordErrorMessage = 'The password must have at least one lower case.'
    }

    // use positive look ahead to see if at least one digit exists
    const haveOneNumber = /(?=.*?[0-9])/
    if (haveOneNumber.test(text)) {
      isAtLeastOneNumber = true
    } else {
      passwordErrorMessage = 'The password must be have at least one number.'
    }

    //min 8 character

    if (text.length >= 8) {
      isMoreThanEightNumber = true
    } else {
      passwordErrorMessage = 'The password needs at least 8 characters.'
    }

    if (values.confirmPass === text) {
      isPasswordMatch = true
    } else {
      confirmPasswordErrorMessage = 'Please make sure your passwords match'
    }

    errors.password = passwordErrorMessage
    errors.confirmPass = confirmPasswordErrorMessage

    await setFieldValue('password', text)
    setState({
      ...state,
      minLowerCase: isMinLowerCase,
      minOneUpperCase: isMinOneUpperCase,
      atLeastOneNumber: isAtLeastOneNumber,
      moreThanEightNumber: isMoreThanEightNumber,
      passwordMatch: isPasswordMatch,
      errors
    })
  }

  const onChangeConfirmPass = async (text, props) => {
    const { values, setFieldValue } = props
    let { errors } = state
    let isPasswordMatch = false
    let confirmPasswordErrorMessage
    if (values.password === text) {
      isPasswordMatch = true
    } else {
      confirmPasswordErrorMessage = 'Please make sure your passwords match'
    }
    errors.confirmPass = confirmPasswordErrorMessage

    await setFieldValue('confirmPass', text)
    setState({
      ...state,
      passwordMatch: isPasswordMatch,
      errors
    })
  }

  const email = route.params.email

  const renderValidateField = (validated, text) => (
    <View style={styles.wrapValidateField}>
      <FastImage
        source={
          validated ? images.check_circle_success : images.check_circle_fail
        }
        style={styles.imageValidate}
        resizeMode={'contain'}
      />
      <Text style={styles.textValidate}>{text}</Text>
    </View>
  )

  const {
    minOneUpperCase,
    minLowerCase,
    atLeastOneNumber,
    moreThanEightNumber,
    passwordMatch
  } = state

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={{ marginBottom: 35 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack()
                }}
              >
                <FastImage
                  style={{ width: 15, height: 25 }}
                  source={images.arrow_back}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            </View>
            <Formik
              initialValues={{
                password: '',
                confirmPass: ''
              }}
              validationSchema={SignUpSchemaWithoutMembership}
              onSubmit={async values => {
                const payload = {
                  email: email,
                  password: values.password
                }
                const res = await fetch(
                  'http://172.16.9.228:443/api/v1/auth/signup',
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                  }
                )
                const data = await res.json()
                if (data.errors) {
                  return showError(data.errors.message)
                }

                const res2 = await fetch(`${config.apiUrl}/customers/me`, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: data.token
                  }
                })
                const data2 = await res2.json()
                await AsyncStorage.setItem('user', JSON.stringify(data2.user))
                showSuccess('Sign Up SuccessFul!')
                navigation.navigate('Home')
              }}
            >
              {props => {
                const {
                  touched,
                  errors,
                  values,
                  handleBlur,
                  submitCount,
                  handleSubmit
                } = props
                return (
                  <View style={styles.wrapper}>
                    <View style={{ marginBottom: 25 }}>
                      <Text style={styles.textWelcome}>Sign Up</Text>
                    </View>
                    <View style={{ width: '90%', marginBottom: 20 }}>
                      <Text style={styles.textEnter}>
                        Enter a password to create an account using this email
                      </Text>
                    </View>
                    <View style={{ marginBottom: 32 }}>
                      <Text style={styles.username}>{email}</Text>
                    </View>
                    <View style={{ marginBottom: 25 }}>
                      <View style={{ marginBottom: 8 }}>
                        <Text style={styles.textEnter}>Password</Text>
                      </View>
                      <PasswordInput
                        value={values.password}
                        onChangeText={text => onChangePassword(text, props)}
                        onBlur={handleBlur('password')}
                        onPressHidden={() =>
                          setState({
                            ...state,
                            isShowPassword: !state.isShowPassword
                          })
                        }
                        isHidden={state.isShowPassword}
                        errors={errors.password}
                        touched={touched.password}
                      />
                      {errors.password && touched.password && (
                        <Label ldErrorInput>{errors.password}</Label>
                      )}
                    </View>
                    <View style={{ marginBottom: 36 }}>
                      <View style={{ marginBottom: 8 }}>
                        <Text style={styles.textEnter}>Confirm Password</Text>
                      </View>
                      <PasswordInput
                        value={values.confirmPass}
                        onChangeText={text => onChangeConfirmPass(text, props)}
                        onBlur={handleBlur('confirmPass')}
                        onPressHidden={() =>
                          setState({
                            ...state,
                            isShowConfirmPassword: !state.isShowConfirmPassword
                          })
                        }
                        isHidden={state.isShowConfirmPassword}
                        errors={errors.confirmPass}
                        touched={touched.confirmPass}
                      />
                      {errors.confirmPass &&
                        touched.confirmPass &&
                        submitCount > 0 && (
                          <Label ldErrorInput>{errors.confirmPass}</Label>
                        )}
                    </View>
                    <View style={{ marginBottom: 15 }}>
                      <Text>Password Check</Text>
                    </View>
                    <View
                      style={[
                        styles.viewValidate,
                        {
                          flexDirection: 'row',
                          justifyContent: 'space-between'
                        }
                      ]}
                    >
                      <View>
                        {renderValidateField(
                          minOneUpperCase,
                          'Min. One uppercase'
                        )}
                        {renderValidateField(
                          minLowerCase,
                          'Min. One lowercase'
                        )}
                        {renderValidateField(
                          atLeastOneNumber,
                          'At least One number'
                        )}
                      </View>
                      <View>
                        {renderValidateField(
                          moreThanEightNumber,
                          'Eight or more characters'
                        )}
                        {renderValidateField(passwordMatch, 'Passwords match')}
                      </View>
                    </View>
                    <View style={{ marginVertical: 40, width: '100%' }}>
                      <Button
                        block
                        success
                        style={styles.btn}
                        onPress={handleSubmit}
                      >
                        <NativeText style={styles.btnText} uppercase={false}>
                          Sign Up
                        </NativeText>
                      </Button>
                    </View>
                  </View>
                )
              }}
            </Formik>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default SignUp
