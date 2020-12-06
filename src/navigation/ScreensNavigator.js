import * as React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

// SCREENS
import Home, {screenOptions as homeScreenOptions} from '../screens/HomeScreen';
import CreateTodo, {
  screenOptions as createTodoScreenOptions,
} from '../screens/CreateTodoScreen';
import UpdateTodo, {
  screenOptions as updateTodoScreenOptions,
} from '../screens/UpdateTodoScreen';

const StackNavigator = createStackNavigator();

export const Navigator = () => {
  return (
    <StackNavigator.Navigator initialRouteName="Home">
      <StackNavigator.Screen
        name="Home"
        component={Home}
        options={homeScreenOptions}
      />
      <StackNavigator.Screen
        name="CreateTodo"
        component={CreateTodo}
        options={createTodoScreenOptions}
      />
      <StackNavigator.Screen
        name="UpdateTodo"
        component={UpdateTodo}
        options={updateTodoScreenOptions}
      />
    </StackNavigator.Navigator>
  );
};
