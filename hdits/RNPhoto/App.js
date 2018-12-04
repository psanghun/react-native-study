import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Search from './component/Search';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Search style={styles.search} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  search: {
    flex: 1
  }
});
