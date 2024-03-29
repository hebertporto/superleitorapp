import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ListView, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { AdMobBanner } from 'react-native-admob';
import ListChapter from './ListChapter';
import { novelsChaptersFetch } from '../actions';


const myIcon = (<Icon name="copyright" size={18} color="#717171" />);
const myIcon2 = (<Icon name="translate" size={18} color="#717171" />);

class NovelScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideFullDescription: true,
      description: '',
      textToogle: 'VER MAIS'
    };
    this.renderDescription = this.renderDescription.bind(this);
    this.toogleDescription = this.toogleDescription.bind(this);
  }

  componentWillMount() {
    const { _id } = this.props.novel;

    this.props.novelsChaptersFetch({ id: _id });
    this.createDataSource(this.props);
    this.renderDescription();
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ novelsChapters }) {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(novelsChapters);
  }

  async toogleDescription() {
    await this.setState((prevState) => {
      return { hideFullDescription: !prevState.hideFullDescription };
    });
    this.renderDescription();
  }

  async renderDescription() {
    const { description } = this.props.novel;   
    if (this.state.hideFullDescription) {
      await this.setState({
        description: `${description.slice(0, 100)}...`,
        textToogle: 'VER MAIS'
      });

      return;
    }
    await this.setState({
      description,
      textToogle: 'VER MENOS'
    });
  }

  renderRow(chapter) {
     const { name } = this.props.novel;
     return <ListChapter chapter={chapter} nameNovel={name} />;
  }

  renderFooter() {
    return (
      <View style={styles.footerAd}>
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
                {this.state.description}
              </Text>

              <TouchableOpacity style={styles.textToogle} onPress={this.toogleDescription}>
                <Text>{this.state.textToogle}</Text>
              </TouchableOpacity>

              <View style={styles.divider} />
                <View style={{ paddingLeft: 8 }}>
                  <View style={styles.viewContainerText}>
                    <Text style={styles.iconStyle}>{myIcon}</Text>
                    <Text numberOfLines={1} style={styles.textStyle}> {author}</Text>
                  </View>
                  <View style={styles.viewContainerText}>
                    <Text style={styles.iconStyle}>{myIcon2}</Text>
                    <Text numberOfLines={1} style={styles.textStyle}> {translation_team}</Text>
                  </View>
                </View>
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
          renderRow={this.renderRow.bind(this)}
          renderHeader={this.renderSectionHeader.bind(this)}
          renderFooter={this.renderFooter}
        />
    );
  }
}

const styles = StyleSheet.create({
  textToogle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerAd: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
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
  },
  viewContainerText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    flex: 1,
    width: undefined,
    height: 110,
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

const mapStateToProps = state => {
   return { novelsChapters: state.novelsChapters };
};

export default connect(mapStateToProps, { novelsChaptersFetch })(NovelScreen);
