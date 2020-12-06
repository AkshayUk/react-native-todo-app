import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const Input = props => {
  if (props.type === 'text') {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{props.label}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={props.typing(props.name)}
          placeholder={props.placeholder}
          multiline={props.name === 'Description' ? true : false}
          defaultValue={props.defaultValue ? props.defaultValue : null}
        />
        <View style={styles.textInputBorder}></View>
      </View>
    );
  } else {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{props.label}</Text>
        <TouchableOpacity onPress={() => props.function()}>
          <TextInput
            style={styles.textInput}
            defaultValue={props.placeholder}
            editable={false}
          />
        </TouchableOpacity>
        <View style={styles.textInputBorder}></View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  inputLabel: {
    fontSize: 16,
  },
  textInput: {
    backgroundColor: '#fff',
    alignItems: 'center',
    letterSpacing: 0,
    color: '#000',
  },
  textInputBorder: {
    height: 0.5,
    backgroundColor: '#000',
  },
});

export default Input;
