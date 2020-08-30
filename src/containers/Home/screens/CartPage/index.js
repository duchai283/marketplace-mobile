import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar
} from 'react-native'
import CartItem from './CartItem'
import ScanButton from 'components/ScanButton'
import images from 'Themes/Images'
import { SvgTrash } from 'Themes/svg'
import { formatMoney } from 'utils/helper'
import styles from './styles'
import Modal from 'react-native-modal'
import _ from 'lodash'
import ConfirmRemoveItemModalBody from './ConfirmRemoveItemModalBody'
import CheckOutModal from './CheckOutModal'
import AsyncStorage from '@react-native-community/async-storage'
import { config } from 'global_config'
import Body from '../../../../../native-base-theme/components/Body'
import { showSuccess, showError } from 'utils/notification'

const CartPage = ({ navigation, route }) => {
  const item = _.get(route, 'params.item', null)

  const [cartData, setCartData] = useState({})
  const [removeItem, setRemoveItem] = useState(null)
  const [checkOut, setCheckOut] = useState(false)
  const [user, setUser] = useState(null)
  useEffect(() => {
    const loadCurrentUser = async () => {
      AsyncStorage.getItem('user').then(data => setUser(JSON.parse(data)))
    }
    loadCurrentUser()
  }, [])

  useEffect(() => {
    const setCartDataProduct = async () => {
      if (item) {
        const cartdata = addItemToCart(item)
        cartdata.then(data => setCartData(data))
      } else {
        AsyncStorage.getItem('cart').then(data => setCartData(JSON.parse(data)))
      }
    }
    setCartDataProduct()
  }, [item])

  const addItemToCart = async item => {
    const cartdata = await AsyncStorage.getItem('cart')
    let cart = _.cloneDeep(cartdata ? JSON.parse(cartdata) : {})

    if (!item) {
      return cart
    }

    if (_.isEmpty(cart)) {
      cart.items = [
        {
          ...item,
          quantity: 1,
          totalAmount: item.final_price ? item.final_price : item.price,
          totalSaving: item.final_price ? item.price - item.final_price : 0
        }
      ]
      cart.grandTotal = item.final_price ? item.final_price : item.price
      cart.totalSaving = item.final_price ? item.final_price : 0
      await AsyncStorage.setItem('cart', JSON.stringify(cart))
      console.log('cart', cart)
      return cart
    }
    const i = cart.items.findIndex(cartItem => cartItem._id === item._id)
    if (i !== -1) {
      // Found item
      cart.items[i].quantity = cart.items[i].quantity + 1
      cart.items[i].totalAmount = item.final_price
        ? item.final_price * cart.items[i].quantity
        : cart.items[i].quantity * item.price
      cart.items[i].totalSaving = item.final_price
        ? (item.price - item.final_price) * cart.items[i].quantity
        : 0
      cart.grandTotal = cart.items.reduce(
        (acc, curr) => acc + curr.totalAmount,
        0
      )
      cart.items.totalSaving = cart.items.reduce(
        (acc, curr) => acc + curr.totalSaving,
        0
      )
    } else {
      // Not found any item
      cart.items = [
        ...cart.items,
        {
          ...item,
          quantity: 1,
          totalAmount: item.final_price ? item.final_price : item.price,
          totalSaving: item.final_price ? item.price - item.final_price : 0
        }
      ]
      cart.grandTotal = cart.items.reduce(
        (acc, curr) => acc + curr.totalAmount,
        0
      )
      cart.totalSaving = cart.items.reduce(
        (acc, curr) => acc + curr.totalSaving,
        0
      )
    }
    await AsyncStorage.setItem('cart', JSON.stringify(cart))
    return cart
  }

  const handleEmptyCart = async () => {
    await AsyncStorage.removeItem('cart')
    setCartData({})
  }
  const handleCheckout = () => {
    setCheckOut(true)
    console.log('checkout')
  }
  const handleOnItemChange = async newItem => {
    const cartdata = await AsyncStorage.getItem('cart')
    let cart = _.cloneDeep(cartdata ? JSON.parse(cartdata) : {})
    const items = _.get(cart, 'items', [])
    const newCart = items.map(item =>
      item._id === newItem._id
        ? {
            ...newItem,
            totalAmount: newItem.final_price
              ? newItem.final_price * newItem.quantity
              : newItem.quantity * newItem.price,
            totalSaving: newItem.final_price
              ? (newItem.price - newItem.final_price) * newItem.quantity
              : 0
          }
        : item
    )
    const grandTotal = newCart.reduce((acc, curr) => acc + curr.totalAmount, 0)
    const totalSaving = newCart.reduce((acc, curr) => acc + curr.totalSaving, 0)
    console.log('newCart', newCart)
    console.log('totalSaving', totalSaving)
    console.log('grandTotal', grandTotal)
    const allCart = {
      grandTotal,
      items: newCart,
      totalSaving
    }

    setCartData(allCart)
    await AsyncStorage.setItem('cart', JSON.stringify(allCart))
  }

  const handleOnItemRemove = async removeItem => {
    const cartdata = await AsyncStorage.getItem('cart')
    let cart = _.cloneDeep(cartdata ? JSON.parse(cartdata) : {})
    const items = _.get(cart, 'items', [])
    const newCart = items.filter(item => item._id !== removeItem._id)
    const grandTotal = newCart.reduce((acc, curr) => acc + curr.totalAmount, 0)
    const totalSaving = newCart.reduce((acc, curr) => acc + curr.totalSaving, 0)
    const allCart = {
      grandTotal,
      items: newCart,
      totalSaving
    }
    setCartData(allCart)
    await AsyncStorage.setItem('cart', JSON.stringify(allCart))
  }

  const handleCheckoutWithApi = async () => {
    console.log('checkout222')
    const requestURL = `${config.apiUrl}/products/create-order`
    if (user.address.length === 0) {
      return showError(
        'You have no address now, please go to our website to update it'
      )
    }
    const payload = {
      shipping: user.address[0],
      total: {
        ...cartData,
        totalAmount: cartData.totalSaving
          ? cartData.grandTotal - cartData.totalSaving
          : cartData.grandTotal
      }
    }

    console.log('payload', payload)
    try {
      const res = await fetch(requestURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...payload, user_id: user._id })
      })
      console.log('res', res)

      const data = await res.json()
      if (data.message) {
        showSuccess(data.message)
        await AsyncStorage.removeItem('cart')
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }]
        })
      }
    } catch (err) {}
  }

  const checkoutZone = (
    <View style={styles.checkoutZoneColumn}>
      <View style={styles.column}>
        <Text style={styles.darkTotalText}>Total</Text>
        <Text style={styles.lightTotalText}>(VAT Included)</Text>
        <Text style={styles.totalSavingLabel}>Total savings</Text>
      </View>

      <View style={styles.column}>
        <Text accessibilityLabel="tx_total_price" style={styles.dartTotalPrice}>
          {formatMoney(_.get(cartData, 'grandTotal', 0))}
        </Text>
        <View style={styles.pinkPriceView}>
          <Text accessibilityLabel="tx_total_saving" style={styles.whiteText}>
            {formatMoney(_.get(cartData, 'totalSaving', 0))}
          </Text>
        </View>
      </View>
      <View style={styles.rowVerticalCenter}>
        <TouchableOpacity
          accessibilityLabel="btn_checkout"
          disabled={!cartData?.items?.length}
          style={[
            styles.checkoutButtonView,
            cartData?.items?.length > 0
              ? styles.enableCheckoutBackgroundBtn
              : styles.disableCheckoutBackgroundBtn
          ]}
          onPress={handleCheckout}
        >
          <Text style={styles.thickWhiteText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#fff'} />

      <Modal isVisible={removeItem !== null && navigation.isFocused()}>
        <ConfirmRemoveItemModalBody
          title={'Do you want to remove this item \n from the cart?'}
          onOkPress={() => {
            handleOnItemRemove(removeItem)
            setRemoveItem(null)
          }}
          onCancelPress={() => {
            setRemoveItem(null)
          }}
        />
      </Modal>

      <Modal isVisible={checkOut}>
        <CheckOutModal
          title={'Do you want to Check Out with this cart?'}
          onOkPress={() => {
            handleCheckoutWithApi()
            setCheckOut(null)
          }}
          onCancelPress={() => {
            setCheckOut(false)
          }}
        />
      </Modal>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          accessibilityLabel="back_btn"
          onPress={() => {
            navigation.goBack()
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image
              source={images.arrow_back}
              style={{ width: 15, height: 25 }}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.header}>CART SUMMARY</Text>

        <TouchableOpacity
          accessibilityLabel="store_detail_empty_cart_btn"
          onPress={handleEmptyCart}
        >
          <View style={styles.emptyCartButton}>
            <SvgTrash style={styles.trashIcon} />
            <Text style={styles.emptyCartText}>{'Empty\nCart'}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {cartData && !_.isEmpty(cartData.items) ? (
          <ScrollView style={styles.flatlist}>
            {cartData.items.map(item => (
              <CartItem
                key={item._id}
                item={item}
                onRemove={() => {
                  setRemoveItem(item)
                }}
                onChange={handleOnItemChange}
              />
            ))}
            <View style={{ marginBottom: 100 }} />
          </ScrollView>
        ) : (
          <View style={styles.nodata} />
        )}

        <View style={styles.scanButtonPosition}>
          <ScanButton
            onPress={() => {
              navigation.navigate('ScanningPage')
            }}
            isBlackIcon={true}
          />
        </View>
      </View>
      {checkoutZone}
    </SafeAreaView>
  )
}

export default CartPage
