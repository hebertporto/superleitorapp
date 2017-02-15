import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Platform } from 'react-native';
import LoginFacebook from './components/LoginFacebook'


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: Platform.OS == 'ios' ? 64 : 54 }}>
       <Scene key="LoginFacebook" component={LoginFacebook}hideNavBar />
    </Router>
  );
};

export default RouterComponent;
