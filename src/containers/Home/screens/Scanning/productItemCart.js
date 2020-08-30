/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import { Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { styles } from './styles'
import { formatMoney } from 'utils/helper'

const ProductItemCart = ({ item }) => {
  if (!item) {
    return null
  }

  return (
    <View style={styles.productItem}>
      <View style={styles.productImageWrapped}>
        <FastImage
          style={styles.productImage}
          resizeMode={'contain'}
          source={{ uri: item.image }}
        />
        {item.final_price !== 0 ? (
          <View style={styles.discountTag}>
            <Text style={styles.discountTagText}>
              {Math.round(((item.price - item.final_price) * 100) / item.price)}{' '}
              {'% OFF'}
            </Text>
          </View>
        ) : null}
      </View>

      <View style={styles.columnFullWidth}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.lightText}>
          {item.desc.length > 25
            ? item.desc.substring(0, 25) + '...'
            : item.desc}
        </Text>

        <View style={styles.columnFlexEnd}>
          <Text style={styles.finalPriceText}>{item.finalPrice}</Text>
          {item.final_price !== 0 ? (
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.originalPriceText}>
                {formatMoney(item.price)}
              </Text>
              <Text style={styles.discountPercentText}>
                {formatMoney(item.final_price)}
              </Text>
            </View>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.price}>{formatMoney(item.price)}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

export default ProductItemCart
