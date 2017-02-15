import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { Spinner, CardSection, Card, Button } from './common';
import firebase from 'firebase';

import FBSDK from 'react-native-fbsdk';
const {
  LoginButton,
  AccessToken
} = FBSDK;


class LoginFacebook extends Component {


  render() {
      return (
        <View>
          <LoginButton
            publishPermissions={["publish_actions"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("login has error: " + result.error);
                } else if (result.isCancelled) {
                  alert("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      alert(data.accessToken.toString())
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => alert("logout.")}/>
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
