import React, { Component } from 'react'
import { View } from 'native-base'
import { TouchableOpacity, TextInput } from 'react-native'
import { styles } from './styles'
import FastImage from 'react-native-fast-image'
import images from 'Themes/Images'

class PasswordInput extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      onChangeText,
      value,
      isHidden,
      placeholder,
      onPressHidden,
      errors,
      touched
    } = this.props
    return (
      <View style={styles.wrapInputPass}>
        <TextInput
          accessibilityLabel="password_input"
          placeholderTextColor={'#000'}
          style={[
            styles.passwordInput,
            errors && touched ? styles.warning : null
          ]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={!isHidden}
        />
        <TouchableOpacity style={styles.buttonSeePass} onPress={onPressHidden}>
          {isHidden ? (
            <FastImage source={images.eyes_open} style={styles.iconButton} />
          ) : (
            <FastImage source={images.eyes_close} style={styles.iconButton} />
          )}
        </TouchableOpacity>
      </View>
    )
  }
}

export default PasswordInput
