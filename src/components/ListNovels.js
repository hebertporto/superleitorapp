import React, { Component } from 'react';
import ReactNative from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
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
              <LinearGradient colors={['rgba(0,0,0,0)','rgba(0,0,0,0.5)']} style={styles.gradientContainer}>
              </LinearGradient>
                <Text numberOfLines={1} style={styles.titleStyle}>
                  {name}
                </Text>
              </Image>
            </CardSection>
            <CardSection>
              <View style={styles.viewStyle}>
                <View style={styles.viewContainerText}>
                  <Text style={styles.iconStyle}>{myIcon}</Text>
                  <Text numberOfLines={1} style={styles.textStyle}> {author}</Text>
                </View>
                <View style={styles.viewContainerText}>
                  <Text style={styles.iconStyle}>{myIcon2}</Text>
                  <Text numberOfLines={1} style={styles.textStyle}> {translation_team}</Text>
                </View>
              </View>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  gradientContainer: {
    height: 45,
    opacity: 0.3,
    alignSelf: 'stretch',
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  },
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
    alignItems: 'flex-start',
  },
  viewContainerText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
     paddingBottom: 5
  },
  textStyle: {
     flex: 1,
     flexDirection: 'row',
     paddingBottom: 5,
     lineHeight: 20
  },
  linearGradient: {
    height: 35,
    opacity: 0.3,
    alignSelf: 'stretch',
  }
});

export default ListNovels;
