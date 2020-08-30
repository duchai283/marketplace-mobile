import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#818792',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  btnChangePassword: {
    width: '50%',
    justifyContent: 'center',
    borderRadius: 5
  },
  btnText: {
    fontSize: 14
  },
  btnViewOrders: {
    width: '40%',
    justifyContent: 'center',
    borderRadius: 5
  },
  headingText: {
    fontSize: 21,
    color: '#40485A',
    fontWeight: '300',
    marginBottom: 20
  },
  edit: {
    fontSize: 15,
    color: '#80AF46'
  },
  label: {
    fontSize: 12,
    color: '#40485A',
    marginBottom: 5
  },
  values: {
    fontSize: 15,
    color: '#40485A',
    fontWeight: 'bold'
  },
  blockElement: {
    marginTop: 15
  },
  mgBottom50: {
    marginBottom: 50
  },
  mgBottom25: {
    marginBottom: 25
  }
})

export default styles
