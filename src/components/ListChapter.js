import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ListChapter extends Component {

  selectChapter() {
      const { number, title, _id } = this.props.chapter;
      const novelName = this.props.nameNovel;

      const chapterTitle = `${number} -  ${title}`;
      Actions.ChapterScreen({ idChapter: _id, title: chapterTitle, novelName });
  }

  render() {
    const { number, title, _id } = this.props.chapter;

     return (
        <TouchableWithoutFeedback onPress={this.selectChapter.bind(this)}>
          <View>
            <View style={styles.viewStyle}>
              <Text style={styles.textStyleNumber}>
                {number}
              </Text>
              <Text 
                style={styles.textStyle} 
                adjustsFontSizeToFit
              >
                {title}
              </Text>
            </View>
            <View style={styles.divider} />
          </View>
        </TouchableWithoutFeedback>
     );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 18,
    marginLeft: 10,
  },
  textStyleNumber: {
    fontSize: 22,
    paddingLeft: 15,
    width: 60
  },
  divider: {
    backgroundColor: 'rgba(0,0,0,.12)',
    height: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10
  }
});

export default ListChapter;
