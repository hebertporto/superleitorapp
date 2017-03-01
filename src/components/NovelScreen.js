import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ListView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AdMobBanner } from 'react-native-admob';
import ListChapter from './ListChapter';

const myIcon = (<Icon name="copyright" size={18} color="#717171" />);
const myIcon2 = (<Icon name="translate" size={18} color="#717171" />);

class NovelScreen extends Component {

  componentWillMount() {
    this.createDataSource(this.props);
  }

  createDataSource() {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows([
      { cap: '01', title: 'Lorem ipsum dolor' },
      { cap: '02', title: 'Lorem dolor' },
      { cap: '04', title: 'Ipsum dolor' },
      { cap: '125', title: 'Lorem ipsum dolor' },
      { cap: '407', title: 'Dolor Lorem' }
    ]);
  }

  renderRow(chapter) {
     return <ListChapter chapter={chapter} />;
  }

  renderFooter() {
    return (
      <View>
        <AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID="ca-app-pub-8356555649836141/2597995459"
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={this.bannerError}
        />
      </View>
    );
  }

  renderSectionHeader() {
    const { title, url } = this.props.novel;
    return (
      <View style={{ paddingTop: Platform.OS === 'ios' ? 64 : 54 }}>
        <Image
          style={styles.imageStyle}
          source={{ uri: url }}
        >
          <Text numberOfLines={2} style={styles.titleStyle}>
            {title}
          </Text>
        </Image>
            <View style={styles.viewStyle}>
              <Text style={styles.textStyleDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum
                vulputate luctus. Nulla venenatis egestas dignissim. Sed eu odio eget leo tincidunt
                lacinia id ut justo. Nulla eros justo, laoreet ac turpis eget
              </Text>
              <View style={styles.divider} />
              <Text numberOfLines={1} style={styles.textStyle}>{myIcon} Jing Wu Hen</Text>
              <Text numberOfLines={1} style={styles.textStyle}>{myIcon2} Saikai Scan</Text>
              <View style={styles.divider} />
            </View>
      </View>
    );
  }
  render() {
    return (
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          renderSectionHeader={this.renderSectionHeader.bind(this)}
          renderFooter={this.renderFooter}
        />

    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 26,
    paddingLeft: 5,
    color: '#ffffff'
  },
  textStyleDescription: {
    paddingTop: 8,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
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
    height: 250,
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  divider: {
        backgroundColor: 'rgba(0,0,0,.12)',
        height: 1,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
        marginBottom: 10

  },
  textStyle: {
    paddingLeft: 10,
    paddingRight: 10
  },
  linearGradient: {
    height: 35,
    opacity: 0.3,
    alignSelf: 'stretch',
  }
});

export default NovelScreen;
