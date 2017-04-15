import React, { Component } from 'react';
import { ListView, RefreshControl, TextInput } from 'react-native';
import { connect } from 'react-redux';
import ListNovels from './ListNovels';
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
              onChangeText={(text) => this.filterSearch(text)}
              placeholder="Pesquisar"
              value={this.state.text}
            />
        );
  }

  renderRow(novel) {
     return <ListNovels novel={novel} />;
  }

  render() {
    const ds = this.state.dataSource;
    const { novels } = this.state;
    
    return (
      <ListView
        enableEmptySections
        dataSource={ds.cloneWithRows(novels)}
        renderRow={this.renderRow}
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
   return { novels: state.novels };
};

export default connect(mapStateToProps, { novelsFetch })(MainScreen);
