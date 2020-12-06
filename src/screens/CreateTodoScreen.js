import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Input} from '../components';
import * as action from '../store/action/TodoAction';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {formatDate, toastMessage} from '../functions';

const CreateTodo = ({navigation}) => {
  const dispatch = useDispatch();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [todo, setTodo] = useState({
    title: '',
    date: '',
    description: '',
  });

  const handleInput = name => {
    return text => {
      setTodo({
        ...todo,
        [name]: text,
      });
    };
  };

  const toggleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const handleConfirm = date => {
    toggleDatePicker();
    setTodo({
      ...todo,
      date: date,
    });
  };

  const createTodo = () => {
    let todoobj = {
      ...todo,
      id: Math.random().toString(),
    };
    if (validateTodo()) {
      dispatch(action.createTodo(todoobj));
      goBack();
      toastMessage('success', 'Task added');
    }
  };

  const validateTodo = () => {
    if (todo.title === '' || todo.title === undefined) {
      toastMessage('error', 'Please enter a title');
    } else if (todo.date === '' || todo.date === undefined) {
      toastMessage('error', 'Please select Date and Time');
    } else {
      return true;
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Input
          name="title"
          type="text"
          label="Title"
          placeholder="New Task Title"
          typing={handleInput}
        />
        <View>
          <Input
            type="select"
            label="Select Date and Time"
            placeholder={
              todo.date !== ''
                ? formatDate(todo.date, 'getDate')
                : 'DD/MM/YYYY 10:45PM'
            }
            function={toggleDatePicker}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={toggleDatePicker}
          />
        </View>
        <Input
          name="description"
          type="text"
          label="Description"
          placeholder="Description Detail"
          typing={handleInput}
        />
        <View style={styles.buttonContainer}>
          <Button text="Create" function={createTodo} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 10,
  },
});

export const screenOptions = {
  headerTitle: 'Create Task',
};

export default CreateTodo;
