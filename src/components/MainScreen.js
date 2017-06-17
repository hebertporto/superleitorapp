import React, { Component } from 'react';
import { ListView, RefreshControl, TextInput, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import ListNovels from './ListNovels';
import LoadingSpinner from './common/LoadingSpinner';
import { novelsFetch } from '../actions';

class MainScreen extends Component {
  
   constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      text: '',
      novels: []
    };
    this.renderFooter = this.renderFooter.bind(this);
    this.props.novelsFetch();
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ novels: nextProps.novels });
  }

  async onRefresh() {
    this.setState({ 
      refreshing: true,
      text: ''
     });
    await this.props.novelsFetch();    
    this.setState({ refreshing: false });
  }

  filterSearch(text) {
    const { novels } = this.props;
    const newData = novels.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      novels: newData,
      text
    });
  }
  
  searchInput() {
    return (
            <TextInput
              style={style.textSearch}
              onChangeText={(text) => this.filterSearch(text)}
              placeholder="Pesquisar"
              value={this.state.text}
              underlineColorAndroid="transparent"
            />
        );
  }

  renderRow(novel) {
     return <ListNovels novel={novel} />;
  }

  renderFooter() {
    const { isLoading } = this.props.toggle;
    if (isLoading) {
      return (
        <View style={style.loadingContainer}>
          <LoadingSpinner spinnerColor="#4286f4" />
        </View>
      );
    }
    return null;
  }

  render() {
    const ds = this.state.dataSource;
    const { novels } = this.state;
    
    return (
      <ListView
        enableEmptySections
        dataSource={ds.cloneWithRows(novels)}
        renderRow={this.renderRow}
        renderFooter={this.renderFooter}
        refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
              colors={['#ff0000', '#00ff00', '#0000ff']}
              tintColor="#00ff00"
            />
          }
        renderHeader={this.searchInput.bind(this)}
      />
    );
  }
}
const mapStateToProps = state => {
   return { novels: state.novels, toggle: state.toggle };
};

const style = StyleSheet.create({
  textSearch: {
    height: 40,
    borderColor: '#ddd',
    borderRadius: 2,
    borderWidth: 1,
    elevation: 1,
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    paddingLeft: 10
  },
  loadingContainer: {
    marginTop: 25,
    flex: 0.1
  }
});

export default connect(mapStateToProps, { novelsFetch })(MainScreen);
