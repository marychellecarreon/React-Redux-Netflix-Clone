import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/containers/Layout';

import {Provider} from 'react-redux';
import {configureStore} from './store/store'



let initialState = {
  upcoming: [],
  topRated :[],
  nowPlaying: [],
  popular: [],
  search: [],
  theMovie: {},
  castList: []
}

let store = configureStore(initialState)

const app = (
  <Provider store={store}>
        <Layout />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))