import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/store';

import Header from './src/components/header';
import CryptoContainer from './src/components/cryptoContainer';

export default class App extends React.Component {
  render() {
    // Store is the glue for react and redux
    return (
      <Provider store={Store}>
        <View>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}