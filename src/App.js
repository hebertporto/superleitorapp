import React, { Component } from 'react';
import Splashscreen from '@remobile/react-native-splashscreen';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
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
