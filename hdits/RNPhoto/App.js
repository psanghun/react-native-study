import React, { Component, Fragment } from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import Search from './component/Search';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startRecord: 0,
      page: 1,
      photoList: []
    };
  }

  fetchData = () => {
    fetch(
      'https://jsonplaceholder.typicode.com/photos?_start=' +
        this.state.startRecord +
        '&_limit=10'
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          ...this.state,
          startRecord: this.state.startRecord + 10,
          photoList: [...this.state.photoList, ...responseJson]
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  photoList = () => {
    if (this.state == null) return <></>;
    return this.state.photoList.map((photoInfo, index) => (
      <Fragment key={index}>
        <Text>
          {photoInfo.id} - {photoInfo.title}
        </Text>
        <Image
          source={{ uri: photoInfo.thumbnailUrl }}
          style={{ width: 400, height: 70 }}
        />
      </Fragment>
    ));
  };

  onScroll = e => {
    if (
      e.nativeEvent.contentOffset.y >=
      e.nativeEvent.contentSize.height - 600
    ) {
      this.fetchData();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Search style={styles.search} />
        <ScrollView
          style={styles.scrollView}
          horizontal={false}
          onScrollEndDrag={this.onScroll}
          scrollEventThrottle={16}
        >
          <this.photoList />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  search: {
    flex: 1
  },
  scrollView: {
    flex: 5
  }
});
