import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    console.log('props', this.props);

    const { title } = this.props.novel;
    return (
      <CardSection>
        <Text style={styles.titleStyle}>
           {title}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};
export default ListItem;
