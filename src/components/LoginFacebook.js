import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Spinner, CardSection, Card, Button } from './common';
import firebase from 'firebase';

class LoginFacebook extends Component {
  onPressButton() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(result => {
      console.log(result);
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      // ...
    }).catch(error => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
});
    console.log(provider);
  }

  render() {
      return (
        <View style={styles.viewStyle}>
          <CardSection>
            <Button onPress={this.onPressButton.bind(this)} >
              Facebook Login
            </Button>
          </CardSection>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    viewStyle: {
      flex: 1
    }
  });

export default LoginFacebook;
