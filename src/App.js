import React, { Component } from 'react';
import Splashscreen from '@remobile/react-native-splashscreen';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    // const config = {
    //   apiKey: 'AIzaSyBSFNS0Z0WWniw0BywFJ-0DlGXe_gxbGxs',
    //   authDomain: 'manager-8f225.firebaseapp.com',
    //   databaseURL: 'https://manager-8f225.firebaseio.com',
    //   storageBucket: 'manager-8f225.appspot.com',
    //   messagingSenderId: '535727167319'
    // };
    // firebase.initializeApp(config);
  }

  componentDidMount() {
     Splashscreen.hide();
  }

  render() {
     const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
     return (
       <Provider store={store} >
         <Router />
       </Provider>
    );
  }
}

export default App;
