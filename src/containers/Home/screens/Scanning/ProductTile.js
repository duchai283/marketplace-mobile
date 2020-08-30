import React, { Component } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import ProductItemCart from './productItemCart'

class ProductTile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { isLoading, product, handleViewCart, handleContinue } = this.props
    const { countDown } = this.state

    return (
      <View>
        <View style={styles.bottomMessageBox}>
          {isLoading ? (
            <View style={styles.loadingView}>
              <ActivityIndicator size="large" color="#ddd" />
            </View>
          ) : product ? (
            <ProductItemCart item={product} />
          ) : (
            <View></View>
          )}
        </View>

        <View style={styles.viewcartButtonWrapped}>
          <TouchableOpacity onPress={handleViewCart}>
            <View style={styles.viewcartButton}>
              <Text style={styles.viewCartText}>VIEW CART</Text>
            </View>
          </TouchableOpacity>

          {product ? (
            <TouchableOpacity onPress={handleContinue}>
              <View style={styles.continueButton}>
                <Text style={styles.continueText}>CONTINUE </Text>
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    )
  }
}

export default ProductTile
