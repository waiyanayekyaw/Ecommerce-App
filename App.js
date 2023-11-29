import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DetailScreen from './screens/ProductDetailScreen';
import Auth from './Auth';
import {store} from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Auth />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
