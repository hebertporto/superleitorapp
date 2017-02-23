import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';


class ListChapter extends Component {
  selectChapter() {
      Actions.ChapterScreen();
  }

  render() {
    const chapter = this.props.chapter;

     return (
        <TouchableWithoutFeedback onPress={this.selectChapter.bind(this)}>
          <View>
              <CardSection>
                <Text style={styles.textStyle}>
                  {chapter}
                </Text>
              </CardSection>
          </View>
        </TouchableWithoutFeedback>
     );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 10
  },
});

export default ListChapter;
