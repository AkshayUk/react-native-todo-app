import Toast from 'react-native-toast-message';

const ToastMessage = (type, text) => {
  return Toast.show({
    type: type,
    text1: text,
    visibilityTime: 3000,
    autoHide: true,
    bottomOffset: 40,
    position: 'bottom',
  });
};

export default ToastMessage;
