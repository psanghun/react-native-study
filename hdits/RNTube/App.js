/* eslint-disable no-undef */
import React, { Component } from 'react';
import { StyleSheet, View, YellowBox } from 'react-native';
import Search from './Components/Search';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';
import Config from './Common/Config';

const config = new Config();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItems: [],
      pageToken: undefined,
      searchword: '',
      isNewSearch: true
    };

    YellowBox.ignoreWarnings(['Task orphaned']);
  }

  render() {
    onSearch = (searchword, resultJSON) => {
      this.setState({
        ...this.state,
        pageToken: resultJSON.nextPageToken,
        searchItems: resultJSON.items,
        searchword: searchword,
        isNewSearch: true
      });
    };

    searchEnd = () => {
      this.setState({
        ...this.state,
        isNewSearch: false
      });
    };

    doMoreSearch = () => {
      let _URL = config.getSearchListURL(this.state.searchword);
      if (this.state.pageToken)
        _URL = _URL + '&pageToken=' + this.state.pageToken;

      fetch(_URL)
        .then(response => response.json())
        .then(responseJSON => {
          this.setState({
            ...this.state,
            isNewSearch: false,
            searchItems: [...this.state.searchItems, ...responseJSON.items],
            pageToken: responseJSON.nextPageToken
          });
        })
        .catch(err => {
          alert(err);
        });
    };

    setVideoId = videoId => {
      this.setState({
        ...this.state,
        videoId: videoId
      });
    };

    closeDetail = () => {
      this.setState({
        ...this.state,
        videoId: undefined
      });
    };

    return (
      <View style={styles.container}>
        <Search onSearch={onSearch} style={styles.search} />
        <VideoList
          style={styles.videoList}
          items={this.state.searchItems}
          isNewSearch={this.state.isNewSearch}
          searchEnd={searchEnd}
          doMoreSearch={doMoreSearch}
          setVideoId={setVideoId}
        />
        <ViewDetail
          videoId={this.state.videoId}
          closeDetail={this.closeDetail}
        />
      </View>
    );
  }
}

const ViewDetail = ({ videoId }) => {
  if (videoId) {
    return <VideoDetail videoId={videoId} visible={true} />;
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
    flex: 8,
    flexDirection: 'row',
    fontSize: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white'
  }
});
