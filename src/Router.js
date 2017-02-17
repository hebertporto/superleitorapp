import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginFacebook from './components/LoginFacebook';
import PageOne from './components/PageOne';


const RouterComponent = () => {
  return (
    <Router>
       <Scene key="login">
         <Scene key="LoginFacebook" component={LoginFacebook} hideNavBar />
       </Scene>
       <Scene key="main">
         <Scene key="PageOne" component={PageOne} title="Super Novel Reader" />
       </Scene>
    </Router>
  );
};

export default RouterComponent;
