import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Button, Text as NativeText } from 'native-base'
import _ from 'lodash'
import styles from './styles'
import AsyncStorage from '@react-native-community/async-storage'

const AccountPage = ({ navigation }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const data = await AsyncStorage.getItem('user')
      const data2 = JSON.parse(data)
      setUser(data2)
      console.log('user', data2)
    }
    getUser()
  }, [])

  const handleChangePassword = () => {
    navigation.navigate('ChangePasswordPage')
  }

  const handleViewOrders = () => {
    navigation.navigate('MyOrdersPage')
  }

  const handleLogOut = async () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Auth' }]
    })
    await AsyncStorage.removeItem('token')
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: '#fff'
      }}
    >
      <View style={{ width: '100%' }}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Account Information</Text>
        </View>
        <View style={styles.blockElement}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.values}>
            {user && user.lastname + ' ' + user.firstname}
          </Text>
        </View>
        <View style={styles.blockElement}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.values}>{user && user.email}</Text>
        </View>
        <View style={styles.blockElement}>
          <Text style={styles.label}>Telephone</Text>
          <Text>{_.get(user, 'address[0].phone')}</Text>
        </View>
        <View style={styles.blockElement}>
          <Text style={styles.label}>Address</Text>
          <Text>
            {`${_.get(user, 'address[0].address', '')}, ${_.get(
              user,
              'address[0].district',
              ''
            )}, ${_.get(user, 'address[0].city', '')}`}
          </Text>
        </View>
        <View style={[styles.blockElement, styles.mgBottom50]}>
          <Text style={styles.label}>Log out</Text>
          <Button
            success
            onPress={handleLogOut}
            style={styles.btnChangePassword}
          >
            <NativeText uppercase={false} style={styles.btnText}>
              Log Out
            </NativeText>
          </Button>
        </View>
        {/*<View style={(styles.heading, styles.mgBottom25)}>
          <Text style={styles.headingText}>My Orders</Text>
        </View>
        <Button success style={styles.btnViewOrders} onPress={handleViewOrders}>
          <NativeText uppercase={false} style={styles.btnText}>
            View Orders
          </NativeText>
        </Button> */}
      </View>
    </View>
  )
}

export default AccountPage
