import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Search from './Components/Search';
import VideoList from './Components/VideoList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: {}
    };
  }

  render() {
    onSearch = resultJSON => {
      this.setState({
        ...this.state,
        searchResult: resultJSON
      });
    };

    return (
      <View style={styles.container}>
        <Search onSearch={onSearch} style={styles.search} />
        <VideoList
          style={styles.videoList}
          items={this.state.searchResult.items}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFA500'
  },
  search: {
    flex: 1,
    margin: 10
  },
  videoList: {
    flex: 8,
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white'
  }
});
