import React, { Component } from 'react';
import { FlatList, Text, Image, TouchableHighlight } from 'react-native';
import Config from '../../Common/Config';

const config = new Config();

/**
 * 검색 결과 리스트
 */
export default class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillReceiveProps() {
    if (this.props.isNewSearch) {
      this.flatListRef.scrollToOffset({ animated: false, offset: 0 });
    }
  }

  handleEndRiched = () => {
    if (!this.onEndReachedCalledDuringMomentum) {
      this.doMoreSearch();
      this.onEndReachedCalledDuringMomentum = true;
    }
  };

  doMoreSearch = () => {
    let _URL = config.getSearchListURL(this.props.searchword);
    if (this.props.nextPageToken)
      _URL = _URL + '&pageToken=' + this.props.nextPageToken;

    fetch(_URL)
      .then(response => response.json())
      .then(responseJSON => {
        this.props.addVideoList({
          videoList: responseJSON.items,
          nextPageToken: responseJSON.nextPageToken
        });
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    return (
      <FlatList
        ref={ref => {
          this.flatListRef = ref;
        }}
        data={this.props.searchItems}
        renderItem={({ item }) => {
          if (item.snippet)
            return (
              <VideoCard
                title={item.snippet.title}
                imgSource={item.snippet.thumbnails.medium.url}
                videoId={item.id.videoId}
                doMoreSearch={this.doMoreSearch}
                setVideoId={this.props.setVideoID}
              />
            );
        }}
        keyExtractor={item => item.id.videoId}
        style={{
          padding: 5,
          marginTop: 20
        }}
        numColumns={2}
        columnWrapperStyle={{ flex: 1, justifyContent: 'space-around' }}
        onEndReached={this.handleEndRiched}
        onEndReachedThreshold={2}
        bounces={false}
        onMomentumScrollBegin={() => {
          this.onEndReachedCalledDuringMomentum = false;
        }}
      />
    );
  }
}

/**
 * 영상 카드
 * @param {제목} title
 * @param {썸네일} imgSource
 * @param {영상ID} videoId
 */
const VideoCard = ({ title, imgSource, videoId, setVideoId }) => {
  const viewDetail = () => {
    if (videoId) setVideoId(videoId);
  };

  return (
    <TouchableHighlight onPress={viewDetail} style={{ width: 180 }}>
      <>
        <Image source={{ uri: imgSource }} style={{ width: 170, height: 80 }} />
        <Text
          numberOfLines={3}
          style={{ fontSize: 15, padding: 5, paddingBottom: 15 }}
        >
          {title}
        </Text>
      </>
    </TouchableHighlight>
  );
};
