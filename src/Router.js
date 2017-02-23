import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Scene, Router } from 'react-native-router-flux';
import LoginFacebook from './components/LoginFacebook';
import MainScreen from './components/MainScreen';
import NovelScreen from './components/NovelScreen';
import ChapterScreen from './components/ChapterScreen';

const renderMenuButton = () => {
        return (<Text><Icon name="rocket" size={30} color="#FFF" /></Text>);
    };

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
           onRight={() => alert('search')}
           rightTitle='Search'
           rightButtonTextStyle={styles.titleStyle}
           onLeft={() => alert('menu')}
           leftTitle='Menu'
           leftButtonTextStyle={styles.titleStyle}
         />
       </Scene>
       <Scene
         key='NovelScreen'
         component={NovelScreen}
         title='Novel Screen'
         titleStyle={styles.titleStyle}
         navigationBarStyle={styles.navigationBarStyle}
         sceneStyle={styles.MainScreen}
         leftButtonIconStyle={{ tintColor: 'white' }}
         renderRightButton={this.renderMenuButton}
       />
       <Scene
         key='ChapterScreen'
         component={ChapterScreen}
         title='Chapter Screen'
         titleStyle={styles.titleStyle}
         navigationBarStyle={styles.navigationBarStyle}
         sceneStyle={styles.MainScreen}
         leftButtonIconStyle={{ tintColor: 'white' }}
         renderRightButton={this.renderMenuButton}
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
