import React, { Component } from 'react';
import { View, Modal, WebView, Button } from 'react-native';

export default class VideoDetail extends Component {
  getDetailUrl = videoId => {
    const url = 'https://www.youtube.com/embed/' + videoId;

    return url;
  };

  closeWin = () => {
    this.props.closeDetail();
  };

  handleClose = () => {
    this.props.closeDetail();
  };

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          visible={true}
          onRequestClose={this.handleClose}
        >
          <WebView source={{ uri: this.getDetailUrl(this.props.videoId) }} />
          <Button title="닫기" onPress={this.closeWin} />
        </Modal>
      </View>
    );
  }
}
