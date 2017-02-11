import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Splashscreen from '@remobile/react-native-splashscreen';

class App extends Component {

  componentDidMount() {
     Splashscreen.hide();
  }

  render() {
     return (
       <View>
         <Text>
             Projeto Iniciado
         </Text>
       </View>
     );
  }
}

export default App;
