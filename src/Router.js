import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import PageOne from './components/PageOne'


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
       <Scene key="pageOne" component={PageOne} title="Page One"/>
    </Router>
  );
};

export default RouterComponent;
