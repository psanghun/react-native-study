import React, { Component } from 'react';
import { FlatList, Text, Image, TouchableHighlight } from 'react-native';
import { inject, observer } from 'mobx-react';
import Config from '../../Common/Config';

const config = new Config();

/**
 * 검색 결과 리스트
 */
@inject('mobxStore')
@observer
export default class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.mobxStore.isNewSearch && this.flatListRef) {
      this.flatListRef.scrollToOffset({ animated: false, offset: 0 });
      this.props.mobxStore.searchEnd();
    }
  }

  handleEndRiched = () => {
    if (!this.onEndReachedCalledDuringMomentum) {
      this.doMoreSearch();
      this.onEndReachedCalledDuringMomentum = true;
    }
  };

  doMoreSearch = () => {
    let _URL = config.getSearchListURL(this.props.mobxStore.searchword);
    if (this.props.mobxStore.nextPageToken)
      _URL = _URL + '&pageToken=' + this.props.mobxStore.nextPageToken;

    fetch(_URL)
      .then(response => response.json())
      .then(responseJSON => {
        this.props.mobxStore.addVideoList(
          responseJSON.items,
          responseJSON.nextPageToken
        );
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
        data={this.props.mobxStore.searchItems}
        renderItem={({ item }) => {
          if (item.snippet)
            return (
              <VideoCard
                title={item.snippet.title}
                imgSource={item.snippet.thumbnails.medium.url}
                videoId={item.id.videoId}
                doMoreSearch={this.props.doMoreSearch}
                setVideoID={this.props.mobxStore.setVideoID}
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
 * @param {상세화면호출 함수} setVideoID
 */
const VideoCard = ({ title, imgSource, videoId, setVideoID }) => {
  const viewDetail = () => {
    if (videoId) setVideoID(videoId);
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
