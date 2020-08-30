/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SvgCheckout } from 'Themes/svg'
import styles from './styles'

const CheckOutModal = ({ title, onOkPress, onCancelPress }) => {
  return (
    <View style={styles.modalBody}>
      <SvgCheckout />
      <Text style={styles.titleText}>{title}</Text>

      <TouchableOpacity
        accessibilityLabel="ok_remove_item_btn"
        onPress={onOkPress}
        style={{ alignSelf: 'stretch', marginTop: 15, marginBottom: 10 }}
      >
        <View style={styles.okButton}>
          <Text style={styles.whiteText}>YES, I WANT TO CHECKOUT</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        accessibilityLabel="cancel_remove_item_btn"
        onPress={onCancelPress}
        style={{ alignSelf: 'stretch', marginBottom: 15, marginTop: 10 }}
      >
        <View style={styles.cancelButton}>
          <Text style={styles.greenText}>NO, I WANT TO SHOP MORE</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CheckOutModal
