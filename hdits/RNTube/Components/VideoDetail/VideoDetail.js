import React, { Component } from 'react';
import { View, Modal, WebView, Button } from 'react-native';
import { observer } from 'mobx-react';

@observer
export default class VideoDetail extends Component {
  getDetailUrl = videoId => {
    const url = 'https://www.youtube.com/embed/' + videoId;

    return url;
  };

  closeWin = () => {
    this.props.tubeStore.clearVideoID();
  };

  handleClose = () => {
    this.props.tubeStore.clearVideoID();
  };

  render() {
    const visible = this.props.tubeStore.isDetailOpen();

    return (
      <View>
        <Modal
          animationType="slide"
          visible={visible}
          onRequestClose={this.handleClose}
        >
          <WebView
            source={{ uri: this.getDetailUrl(this.props.tubeStore.videoID) }}
          />
          <Button title="닫기" onPress={this.closeWin} />
        </Modal>
      </View>
    );
  }
}
