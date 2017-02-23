import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardSection } from './common';
import ListChapter from './ListChapter';

const myIcon = (<Icon name="copyright" size={18} color="#717171" />);
const myIcon2 = (<Icon name="cc" size={18} color="#717171" />);

class NovelScreen extends Component {

  componentWillMount() {
    this.createDataSource(this.props);
  }

  createDataSource() {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(['Chapter 1', 'Chapter 2',
     'Chapter 3', 'Chapter 4', 'Chapter 5', 'Chapter 6', 'Chapter 7',
     'Chapter 8', 'Chapter 9', 'Chapter 10']);
  }

  renderRow(chapter) {
     return <ListChapter chapter={chapter} />;
  }
  render() {
    const { title, image, artist } = this.props.novel;
    return (
      <View>
        <Card>
          <CardSection>
            <Image
              style={styles.imageStyle}
              source={{ uri: image }}
            >
              <Text numberOfLines={1} style={styles.titleStyle}>
                {title}
              </Text>
            </Image>
          </CardSection>
          <CardSection>
            <View style={styles.viewStyle}>
              <Text numberOfLines={1} style={styles.textStyle}>{myIcon} {title}</Text>
              <Text numberOfLines={1} style={styles.textStyle}>{myIcon2} {artist}</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum
                vulputate luctus. Nulla venenatis egestas dignissim. Sed eu odio eget leo tincidunt
                lacinia id ut justo. Nulla eros justo, laoreet ac turpis eget
              </Text>
            </View>
          </CardSection>
        </Card>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
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
    height: 180,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  textStyle: {
  },
  linearGradient: {
    height: 35,
    opacity: 0.3,
    alignSelf: 'stretch',
  }
});

export default NovelScreen;
