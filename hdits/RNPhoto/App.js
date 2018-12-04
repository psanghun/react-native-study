import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Search from './component/Search';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, marginTop: 30 }}>
        <View style={styles.container}>
          <Search style={styles.search} />
          <Search style={styles.search} />
          <Search style={styles.search} />
          <Search style={styles.search} />
          <Search style={styles.search} />
          <Search style={styles.search} />
          <Search style={styles.search} />
          <Search style={styles.search} />
        </View>
      </ScrollView>
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
