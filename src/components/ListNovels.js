import React, { Component } from 'react';
import ReactNative from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card } from './common';

const {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback
} = ReactNative;

const myIcon = (<Icon name="copyright" size={18} color="#717171" />);
const myIcon2 = (<Icon name="translate" size={18} color="#717171" />);

class ListNovels extends Component {
  selectNovel() {
      Actions.NovelScreen({ novel: this.props.novel, title: this.props.novel.name });
  }


  render() {
    // const { title, url, id } = this.props.novel;
    const { name, cover_url, author, translation_team } = this.props.novel;
    return (
      <TouchableWithoutFeedback onPress={this.selectNovel.bind(this)}>
        <View>
          <Card>
            <CardSection>
              <Image
                style={styles.imageStyle}
                source={{ uri: cover_url }}
              >
                <Text numberOfLines={1} style={styles.titleStyle}>
                  {name}
                </Text>
              </Image>
            </CardSection>
            <CardSection>
              <View style={styles.viewStyle}>
                <Text numberOfLines={1} style={styles.textStyle}>{myIcon} {author}</Text>
                <Text numberOfLines={1} style={styles.textStyle}>{myIcon2} {translation_team}</Text>
              </View>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    paddingLeft: 5,
    color: '#ffffff'
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 8
  },
  imageStyle: {
    flex: 1,
    width: undefined,
    height: 110,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  textStyle: {
     flex: 1,
     flexDirection: 'column',
     paddingBottom: 5
  },
  linearGradient: {
    height: 35,
    opacity: 0.3,
    alignSelf: 'stretch',
  }
});

export default ListNovels;
