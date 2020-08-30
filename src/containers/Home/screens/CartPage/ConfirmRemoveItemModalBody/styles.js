import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  modalBody: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  greenText: {
    color: '#80AF46',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 28
  },
  cancelButton: {
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#80AF46',
    paddingVertical: 10
  },
  whiteText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 28
  },
  okButton: {
    borderRadius: 5,
    backgroundColor: '#80AF46',
    paddingVertical: 10
  },
  messageText: {
    color: '#40485A',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 19
  },
  titleText: {
    color: '#80AF46',
    textAlign: 'center',
    fontSize: 21,
    lineHeight: 28,
    fontWeight: '300',
    marginVertical: 41
  }
})

export default styles
