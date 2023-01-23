import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';


import App from './App';
import store from './redux/store';
import './styles/main.css';
import './styles/icomoon.css';

ReactDOM.render(
  <AppContainer>
  <Provider store={store}>
  <App />
		</Provider>
	</AppContainer>,
	document.getElementById('root'),
);

serviceWorker.unregister();
