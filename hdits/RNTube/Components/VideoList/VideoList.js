import React, { Component } from 'react';
import { FlatList, Text, Image, TouchableHighlight } from 'react-native';

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
      this.props.searchEnd();
    }
  }

  handleEndRiched = () => {
    if (!this.onEndReachedCalledDuringMomentum) {
      this.props.doMoreSearch();
      this.onEndReachedCalledDuringMomentum = true;
    }
  };

  render() {
    return (
      <FlatList
        ref={ref => {
          this.flatListRef = ref;
        }}
        data={this.props.items}
        renderItem={({ item }) => {
          if (item.snippet)
            return (
              <VideoCard
                title={item.snippet.title}
                imgSource={item.snippet.thumbnails.medium.url}
                videoId={item.id.videoId}
                doMoreSearch={this.props.doMoreSearch}
                setVideoId={this.props.setVideoId}
              />
            );
        }}
        keyExtractor={item => item.id.videoId}
        style={{
          padding: 5,
          marginTop: 20
        }}
        numColumns={2}
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
          style={{ fontSize: 12, padding: 5, paddingBottom: 15 }}
        >
          {title}
        </Text>
      </>
    </TouchableHighlight>
  );
};
