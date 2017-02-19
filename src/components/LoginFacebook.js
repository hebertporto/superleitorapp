import React, { Component } from 'react';
import FBSDK from 'react-native-fbsdk';
import { StyleSheet, Image, Button, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Orientation from 'react-native-orientation';

const { LoginManager, AccessToken } = FBSDK;

class LoginFacebook extends Component {

  componentWillMount() {
      Orientation.lockToPortrait();
  }

  handleFacebookLogin() {
     LoginManager.logInWithReadPermissions(['public_profile'])
        .then(result => {
               if (result.isCancelled) {
                 alert('Login cancelled');
               } else {
                 console.log('result', result.grantedPermissions.toString());
                 AccessToken.getCurrentAccessToken().then(data => {
                    console.log('retorno', data.accessToken);          
                 });
               }
             },
        error => {
         alert(`Login fail with error:  ${error}`);
       }
     );
    }
    render() {
     return (
        <Image
        source={require('./../assets/img/login-background.png')}
        style={styles.container}
        >
          <View style={styles.viewStyle}>
              <Button
                onPress={this.handleFacebookLogin}
                color="#4267B2"
                title="Login com Facebook"
              />
          </View>
       </Image>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  viewStyle: {
    position: 'absolute',
    bottom: 160,
    paddingLeft: 100
  }
});

export default LoginFacebook;
