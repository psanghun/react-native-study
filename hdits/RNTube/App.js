/* eslint-disable no-undef */
import React, { Component } from 'react';
import { StyleSheet, View, YellowBox } from 'react-native';
import Search from './Components/Search';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';
import { Provider, observer } from 'mobx-react';
import Store from './mobx/Store';

const tubeStore = new Store();

@observer
export default class App extends Component {
  constructor(props) {
    super(props);

    YellowBox.ignoreWarnings(['Task orphaned']);
  }

  render() {
    return (
      <Provider mobxStore={tubeStore}>
        <View style={styles.container}>
          <Search style={styles.search} />
          <VideoList style={styles.videoList} />
          <ViewDetail />
        </View>
      </Provider>
    );
  }
}

const ViewDetail = () => {
  if (tubeStore.isDetailOpen) {
    return <VideoDetail videoId={tubeStore.videoID} tubeStore={tubeStore} />;
  } else {
    return <></>;
  }
};

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
    display: 'flex',
    flex: 9,
    flexDirection: 'row',
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    backgroundColor: 'white'
  }
});
