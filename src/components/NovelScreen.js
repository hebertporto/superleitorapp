import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ListView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AdMobBanner } from 'react-native-admob';
import ListChapter from './ListChapter';
import { connect } from 'react-redux';
import { novelsChaptersFetch } from '../actions';


const myIcon = (<Icon name="copyright" size={18} color="#717171" />);
const myIcon2 = (<Icon name="translate" size={18} color="#717171" />);

class NovelScreen extends Component {

  componentWillMount() {
    const { _id } = this.props.novel;

    this.props.novelsChaptersFetch({ id: _id });
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({novelsChapters}) {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(novelsChapters);
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
    const { name, cover_url, author, translation_team, description } = this.props.novel;
    return (
      <View style={{ paddingTop: Platform.OS === 'ios' ? 64 : 54 }}>
        <Image
          style={styles.imageStyle}
          source={{ uri: cover_url }}
        >
          <Text numberOfLines={2} style={styles.titleStyle}>
            {name}
          </Text>
        </Image>
            <View style={styles.viewStyle}>
              <Text style={styles.textStyleDescription}>
                {description}
              </Text>
              <View style={styles.divider} />
              <Text numberOfLines={1} style={styles.textStyle}>{myIcon} {author} </Text>
              <Text numberOfLines={1} style={styles.textStyle}>{myIcon2} {translation_team}</Text>
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

const mapStateToProps = state => {
  console.log(state);
   return { novelsChapters: state.novelsChapters.chapters };
};

export default connect(mapStateToProps, { novelsChaptersFetch })(NovelScreen);
