/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SvgRemoveItem } from 'Themes/svg'
import styles from './styles'

const ConfirmRemoveItemModalBody = ({ title, onOkPress, onCancelPress }) => {
  return (
    <View style={styles.modalBody}>
      <SvgRemoveItem />
      <Text style={styles.titleText}>{title}</Text>

      <TouchableOpacity
        accessibilityLabel="ok_remove_item_btn"
        onPress={onOkPress}
        style={{ alignSelf: 'stretch', marginTop: 15, marginBottom: 10 }}
      >
        <View style={styles.okButton}>
          <Text style={styles.whiteText}>YES, REMOVE ITEM FROM CART</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        accessibilityLabel="cancel_remove_item_btn"
        onPress={onCancelPress}
        style={{ alignSelf: 'stretch', marginBottom: 15, marginTop: 10 }}
      >
        <View style={styles.cancelButton}>
          <Text style={styles.greenText}>NO, KEEP THE ITEM</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ConfirmRemoveItemModalBody
