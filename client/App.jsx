import React from 'react';
import Main from './src/screens/Main';
import {Auth0Provider} from 'react-native-auth0';
import {Provider} from 'react-redux';
import store from './src/store';
import config from './auth0-configuration';

function App() {
  return (
    <Auth0Provider domain={config.domain} clientId={config.clientId}>
      <Provider store={store}>
        <Main />
      </Provider>
    </Auth0Provider>
  );
}

export default App;
