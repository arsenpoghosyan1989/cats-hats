import React from 'react';
import './index.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import I18nextProvider from './providers/I18nextProvider';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <I18nextProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
