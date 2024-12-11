/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {RootSiblingParent} from 'react-native-root-siblings';
import store from './state';
import Entry from './web-app';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <RootSiblingParent>
        <Entry />
      </RootSiblingParent>
    </Provider>
  );
}

export default App;
