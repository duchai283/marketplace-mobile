import {Toast} from 'native-base';

export const showError = msg => {
  Toast.show({
    position: 'top',
    text: msg,
    duration: 4000,
    type: 'danger',
    buttonText: 'Ok',
  });
};

export const showSuccess = msg => {
  Toast.show({
    position: 'top',
    text: msg,
    duration: 4000,
    type: 'default',
    buttonText: 'Ok',
  });
};
