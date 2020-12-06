import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';

// Reducer
import rootReducer from './store/reducer/index';

// Navigation
import AppNavigator from './navigation/AppNavigator';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
      <Toast ref={ref => Toast.setRef(ref)} />
    </Provider>
  );
}
