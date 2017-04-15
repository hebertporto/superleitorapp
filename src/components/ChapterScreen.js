import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AdMobBanner } from 'react-native-admob';
import { connect } from 'react-redux';
import { chapterFetch } from '../actions';

const myIcon2 = (<Icon name="translate" size={18} color="#717171" />);

class ChapterScreen extends Component {

  componentWillMount() {
    const id = this.props.idChapter;
    this.props.chapterFetch({ id });
  }

  render() {
      const title = this.props.title;
      const novelName = this.props.novelName;

      const { content, translators, revisors } = this.props.chapter;
      return (
        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingTop: Platform.OS === 'ios' ? 64 : 54 }}>
            <View style={styles.viewHeaderStyle}>
                <Text numberOfLines={1} style={styles.titleStyle}> {novelName} </Text>
                <Text style={styles.subTitleStyle}>{title}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.viewStyle}>
                <View style={styles.viewContainerText}>
                  <Text style={styles.iconStyle}>{myIcon2}</Text>
                  <Text numberOfLines={1} style={styles.textStyleHeader}> {translators}</Text>
                </View>
                <View style={styles.viewContainerText}>
                  <Text style={styles.iconStyle}>{myIcon2}</Text>
                  <Text numberOfLines={1} style={styles.textStyleHeader}> {revisors}</Text>
                </View>
              </View>
            <View style={styles.divider} />
            <View>
                <Text style={styles.textStyle}>
                  {content}
                </Text>
                <View style={{ height: 70 }} />
            </View>
          </ScrollView>
            <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
              <AdMobBanner
                bannerSize="smartBannerPortrait"
                adUnitID="ca-app-pub-8356555649836141/9541656259"
                testDeviceID="EMULATOR"
                didFailToReceiveAdWithError={this.bannerError}
              />
            </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    padding: 10,
    marginBottom: 50,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 20,
    color: 'black'
  },
  iconStyle: {
     paddingBottom: 5,
     paddingLeft: 5
  },
  textStyleHeader: {
     flex: 1,
     flexDirection: 'row',
     paddingBottom: 5,
     lineHeight: 20
  },
  viewHeaderStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20
  },
  titleStyle: {
    fontSize: 26,
    color: 'black'

  },
  subTitleStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 10
  },
  divider: {
    backgroundColor: 'rgba(0,0,0,.12)',
    height: 1,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 10
  },
  info: {
    paddingLeft: 10
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 15,
    paddingTop: 4,
    paddingBottom: 4
  },
  viewContainerText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

const mapStateToProps = state => {
   return { chapter: state.chapter };
};

export default connect(mapStateToProps, { chapterFetch })(ChapterScreen);
