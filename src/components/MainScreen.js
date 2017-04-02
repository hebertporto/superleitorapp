import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListNovels from './ListNovels';
import { novelsFetch } from '../actions';

class MainScreen extends Component {

  componentWillMount() {
    this.props.novelsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ novels }) {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(novels);
  }

  renderRow(novel) {
     return <ListNovels novel={novel} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}
const mapStateToProps = state => {
   return { novels: state.novels };
};

export default connect(mapStateToProps, { novelsFetch })(MainScreen);
