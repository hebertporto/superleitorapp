import React from 'react';
import { Platform } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Scene, Router } from 'react-native-router-flux';
import LoginFacebook from './components/LoginFacebook';
import PageOne from './components/PageOne';

// const renderMenuButton = () => {
//         return (
//
//                 <Icon name="rocket" size={30} color="#FFF" />
//
//         );
//     };

const RouterComponent = () => {
  return (
    <Router>
       <Scene key="login">
         <Scene key="LoginFacebook" component={LoginFacebook} hideNavBar />
       </Scene>
       <Scene key="main" initial>
         <Scene
           key='PageOne'
           component={PageOne}
           title='Super Novel Reader'
           navigationBarStyle={{ backgroundColor: '#2196F3' }}
           titleStyle={{ color: 'white' }}
           sceneStyle={{
             paddingTop: Platform.OS === 'ios' ? 64 : 54,
             flex: 1,
             backgroundColor: '#eee'
           }}
         />
       </Scene>
    </Router>
  );
};

export default RouterComponent;
