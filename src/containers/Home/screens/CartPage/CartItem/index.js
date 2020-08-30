/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import SaveRemoveButton from '../SaveRemoveButton'
import UpdateNumberButton from '../UpdateNumberButton'
import { formatMoney } from 'utils/helper'
import styles from './styles'

const CartItem = ({ item, onRemove, onChange }) => {
  return (
    <View style={styles.productItem}>
      <View style={styles.rowBetween}>
        <View style={styles.imageProductWrapper}>
          <FastImage
            style={{
              width: 80,
              height: 80,
              backgroundColor: '#ECEDEF'
            }}
            resizeMode={'contain'}
            source={{ uri: item.image }}
          />
        </View>

        <View style={styles.flexColumn}>
          {/* ROW 1 */}
          <View style={styles.flexRow}>
            <View style={{ flex: 1 }}>
              <Text
                numberOfLines={3}
                style={{
                  color: '#40485A',
                  fontSize: 15
                }}
              >
                {item.title}
              </Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <UpdateNumberButton
                value={item.quantity}
                onMinusPress={() => {
                  const newItem = {
                    ...item,
                    quantity: item.quantity - 1
                  }

                  if (newItem.quantity === 0) {
                    onRemove(item.id)
                  } else {
                    onChange(newItem)
                  }
                }}
                onPlusPress={() => {
                  const newItem = {
                    ...item,
                    quantity: item.quantity + 1
                  }

                  onChange(newItem)
                }}
              />
            </View>
          </View>

          {/* ROW 2 */}
          <View style={styles.rowSpaceBetween}>
            <Text style={styles.redPrice}>{formatMoney(item.price)}</Text>
            <Text style={styles.darkTotalPrice}>
              {formatMoney(item.totalAmount)}
            </Text>
          </View>

          {/* ROW 3 */}
          <View style={styles.rowSpaceBetween}>
            <Text style={styles.lineThroughPrice}>
              {item.originalPrice > item.unitPrice
                ? formatMoney(item.originalPrice)
                : ''}
            </Text>
            <Text style={styles.redTotalSave}>
              {item.totalSaving > 0
                ? 'Save ' + formatMoney(item.totalSaving)
                : ''}
            </Text>
          </View>
        </View>
      </View>
      <SaveRemoveButton onRemovePress={onRemove} item={item} />
    </View>
  )
}

export default CartItem
