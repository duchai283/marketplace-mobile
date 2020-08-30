import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 5,
  },
  imageValidate: {
    marginLeft: 8,
    width: 12,
    height: 18,
  },
  wrapValidateField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  textValidate: {
    fontSize: 12,
    color: '#40485A',
    marginLeft: 15,
    height: 19,
  },
  textWelcome: {
    fontSize: 31,
    fontWeight: '100',
    color: '#83B151',
  },
  btn: {
    width: '100%',
    borderRadius: 5,
    height: 50,
    padding: 10,
    shadowColor: '#3e3e3e',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
  },
  username: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  textEnter: {
    color: '#40485A',
    fontSize: 16,
  },
  wrapPrivacy: {
    marginTop: 26,
  },
  textLink: {
    color: '#83b151',
    textDecorationLine: 'underline',
  },
  acceptPrivacy: {
    marginTop: 36,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  imageCheck: {
    width: 22,
    height: 22,
  },
});
