import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Button = props => {
  return (
    <TouchableOpacity
      style={styles.loginButton}
      onPress={() => props.function()}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    padding: 14,
    backgroundColor: '#466bcf',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 14,
    width: width / 3,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Button;
