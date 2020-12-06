import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import * as action from '../store/action/TodoAction';
import {toastMessage} from '../functions';
import {formatDate} from '../functions';

const {width, height} = Dimensions.get('window');

const Card = props => {
  const dispatch = useDispatch();

  const deleteTodo = id => {
    dispatch(action.deleteTodo(id));
    toastMessage('success', 'Task deleted');
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={() => props.function(props.id)}
        style={{
          flex: 0.95,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Text style={styles.buttonText} numberOfLines={1}>
            {props.text}
          </Text>
        </View>
        <Text>{formatDate(props.time)}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTodo(props.id)}>
        <Image
          source={require('../assets/delete.png')}
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 60,
    backgroundColor: '#f2f2f2',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 6,
    marginVertical: 8,
    width: width * 0.9,
    padding: 14,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  deleteIcon: {
    transform: [
      {
        scale: 0.8,
      },
    ],
  },
});

export default Card;
