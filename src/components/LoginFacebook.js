import React, { Component } from 'react';
import FBSDK from 'react-native-fbsdk';
import { StyleSheet, Image, Button, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const { LoginManager } = FBSDK;

class LoginFacebook extends Component {

  handleFacebookLogin() {
     LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends'])
        .then(result => {
               if (result.isCancelled) {
                 alert('Login cancelled');
               } else {
                 Actions.main();
                 //alert('Login success with permissions: ' + result.grantedPermissions.toString());
               }
             },
        error => {
         alert('Login fail with error: ' + error);
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
