import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { SvgSave, SvgRemove } from 'Themes/svg'
import styles from './styles'

const SaveRemoveButton = ({ onRemovePress, item }) => {
  return (
    <View style={[styles.rowFlexEnd, { marginTop: 10 }]}>
      <TouchableOpacity
        accessibilityLabel="remove_item_btn"
        style={styles.row}
        onPress={onRemovePress}
      >
        <SvgRemove style={styles.svgIcon} />
        <Text style={styles.lightSmallText}>Remove</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SaveRemoveButton
