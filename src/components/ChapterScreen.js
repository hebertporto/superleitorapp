import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  AdMobBanner
} from 'react-native-admob';


const myIcon2 = (<Icon name="translate" size={18} color="#717171" />);

class ChapterScreen extends Component {
  render() {
      return (
        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingTop: Platform.OS === 'ios' ? 64 : 54 }}>
            <View style={styles.viewHeaderStyle}>
                <Text style={styles.titleStyle}>Tales of Gods and Demons </Text>
                <Text style={styles.subTitleStyle}>Quando eles viram a cena diante </Text>
            </View>
            <View style={styles.divider} />
            <View>
              <Text style={styles.info} numberOfLines={1}>
                {myIcon2} Tradutor 1, Tradutor 2
              </Text>
              <Text style={styles.info} numberOfLines={1}>{myIcon2} Revisor</Text>
            </View>
            <View style={styles.divider} />
            <View>
                <Text style={styles.textStyle}>
                Quando eles viram a cena diante deles, aqueles que ainda estavam
                planejando blefar sua saída começaram a tremer de medo.
                Quando eles viram a cena diante deles, aqueles que ainda estavam
                planejando blefar sua saída começaram a tremer de medo.
                Quando eles viram a cena diante deles, aqueles que ainda estavam
                planejando blefar sua saída começaram a tremer de medo.
                Quando eles viram a cena diante deles, aqueles que ainda estavam
                planejando blefar sua saída começaram a tremer de medo.

                Quando eles viram a cena diante deles, aqueles que ainda estavam
                planejando blefar sua saída começaram a tremer de medo.

                Quando eles viram a cena diante deles, aqueles que ainda estavam
                planejando blefar sua saída começaram a tremer de medo.

                Quando eles viram a cena diante deles, aqueles que ainda estavam
                planejando blefar sua saída começaram a tremer de medo.

                Quando eles viram a cena diante deles, aqueles que ainda estavam
                planejando blefar sua saída começaram a tremer de medo.

                Quando eles viram a cena diante deles, aqueles que ainda estavam
                planejando blefar sua saída começaram a tremer de medo. Fim.
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
    fontSize: 18
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
  }

});
export default ChapterScreen;
