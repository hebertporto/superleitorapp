import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
  render() {
    return (
      <View style={{ margin: 128, paddingTop: Platform.OS === 'ios' ? 64 : 54 }}>
        <Text onPress={Actions.pageTwo}>Você está logado.</Text>
      </View>
    );
  }
}
