import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonFacebook = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
   return (
     <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
     >
      <Text style={textStyle}>
        { children }
      </Text>
     </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#4267B2',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
});

export { ButtonFacebook };
