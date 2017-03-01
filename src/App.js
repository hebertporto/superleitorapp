import React, { Component } from 'react';
import Splashscreen from '@remobile/react-native-splashscreen';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AdMobInterstitial } from 'react-native-admob'

// import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

AdMobInterstitial.setTestDeviceID('EMULATOR');
AdMobInterstitial.setAdUnitID('ca-app-pub-8356555649836141/1032680654');

class App extends Component {

  componentWillMount() {
    AdMobInterstitial.removeAllListeners();
  }

  componentDidMount() {
    Splashscreen.hide();
    AdMobInterstitial.addEventListener('interstitialDidLoad',
      () => console.log('interstitialDidLoad event'));
    AdMobInterstitial.addEventListener('interstitialDidClose',
      this.interstitialDidClose);
    AdMobInterstitial.addEventListener('interstitialDidFailToLoad',
      () => console.log('interstitialDidFailToLoad event'));
    AdMobInterstitial.addEventListener('interstitialDidOpen',
      () => console.log('interstitialDidOpen event'));
    AdMobInterstitial.addEventListener('interstitialWillLeaveApplication',
      () => console.log('interstitalWillLeaveApplication event'));

    AdMobInterstitial.requestAd((error) => error && console.log(error));
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
