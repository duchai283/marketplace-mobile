/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const UpdateNumberButton = ({ value, onMinusPress, onPlusPress }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
    <View
      style={{
        height: 30.6,
        width: 30.6,
        borderWidth: 1,
        borderColor: lightestColor,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderRightWidth: 0,

        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text style={{ color: darkColor, fontSize: 16 }}>{value}</Text>
    </View>

    <TouchableOpacity
      accessibilityLabel="decrease_quantity_btn"
      onPress={onMinusPress}
    >
      <View
        style={{
          height: 30.6,
          width: 30.6,
          backgroundColor: mainGreenColor,
          borderRightWidth: 0,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View style={{ width: 15, height: 2, backgroundColor: 'white' }} />
      </View>
    </TouchableOpacity>

    <TouchableOpacity
      accessibilityLabel="increase_quantity_btn"
      onPress={onPlusPress}
    >
      <View
        style={{
          height: 30.6,
          width: 30.6,
          backgroundColor: darkGreenColor,
          borderTopRightRadius: 5,
          borderBottomEndRadius: 5,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View style={{ width: 15, height: 2, backgroundColor: 'white' }} />
        <View
          style={{
            width: 2,
            height: 15,
            backgroundColor: 'white',
            position: 'absolute'
          }}
        />
      </View>
    </TouchableOpacity>
  </View>
)

export default UpdateNumberButton

const mainGreenColor = '#80AF46'
const darkGreenColor = '#69862C'
const darkColor = '#40485A'
const lightestColor = '#ECEDEF'
