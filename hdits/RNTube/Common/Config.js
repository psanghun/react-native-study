import React, { Component } from 'react';
import { Text } from 'react-native';
import rnconfig from 'react-native-config';
/**
 * 설정 정보 CLASS
 *
 */
class Config extends Component {
  API_KEY = rnconfig.REACT_APP_API_KEY;

  /**
   * 검색 URL 조립
   */
  getSearchListURL = searchword => {
    const url =
      'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&type=video&q=' +
      searchword +
      '&key=' +
      this.API_KEY;

    return url;
  };

  render() {
    return <Text>{this.API_KEY}</Text>;
  }
}

export default Config;
