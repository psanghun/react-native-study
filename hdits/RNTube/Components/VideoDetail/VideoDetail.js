import React, { Component } from 'react';
import { View, Text, Modal, WebView, Button } from 'react-native';

export default class VideoDetail extends Component {
  getDetailUrl = videoId => {
    const url = 'https://www.youtube.com/embed/' + videoId;

    return url;
  };

  checkVisible = () => {
    if (this.props.videoId) {
      return true;
    } else {
      return false;
    }
  };
  render() {
    return (
      <View>
        <Modal animationType="slide" visible={this.checkVisible()}>
          <Text>{this.props.videoId}</Text>
          <WebView source={{ uri: this.getDetailUrl(this.props.videoId) }} />
          <Button title="닫기" onPress={this.props.closeDetail()} />
        </Modal>
      </View>
    );
  }
}
