import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginFacebook from './components/LoginFacebook';
import MainScreen from './components/MainScreen';
import NovelScreen from './components/NovelScreen';
import ChapterScreen from './components/ChapterScreen';


const RouterComponent = () => {
  return (
    <Router>
       <Scene key="login">
         <Scene key="LoginFacebook" component={LoginFacebook} hideNavBar />
       </Scene>
       <Scene key="main" initial>
         <Scene
           key='MainScreen'
           component={MainScreen}
           title='Super Novel Reader'
           navigationBarStyle={styles.navigationBarStyle}
           titleStyle={styles.titleStyle}
           sceneStyle={styles.MainScreen}
         />
       </Scene>
       <Scene
         key='ChapterScreen'
         component={ChapterScreen}
         title='Chapter Screen'
         titleStyle={styles.titleStyle}
         navigationBarStyle={styles.navigationBarStyle}
         leftButtonIconStyle={{ tintColor: 'white' }}
         renderRightButton={this.renderMenuButton}
         hideNavBar={false}
       />
       <Scene
         key='NovelScreen'
         component={NovelScreen}
         hideNavBar
       />

    </Router>
  );
};

const styles = StyleSheet.create({
  MainScreen: {
    paddingTop: Platform.OS === 'ios' ? 64 : 54,
    flex: 1,
    backgroundColor: '#eee'
  },
  navigationBarStyle: {
    backgroundColor: '#2196F3'
  },
  titleStyle: {
    color: 'white'
  }
});

export default RouterComponent;
