import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import LoginFacebook from './components/LoginFacebook'


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
       <Scene key="LoginFacebook" component={LoginFacebook}hideNavBar />
    </Router>
  );
};

export default RouterComponent;
