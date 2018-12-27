import React, { Component } from 'react';
import { FlatList, View, Text, Image } from 'react-native';

/**
 * 검색 결과 리스트
 */
export default class VideoList extends Component {
  items = [];

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatList
        data={this.props.items}
        renderItem={({ item }) => {
          if (item.id.videoId)
            return (
              <View>
                <Image
                  source={{ uri: item.snippet.thumbnails.medium.url }}
                  style={{ width: 360, height: 150 }}
                />
                <Text>{item.snippet.title}</Text>
              </View>
            );
        }}
        keyExtractor={item => item.etag}
        style={{
          padding: 5,
          marginTop: 20
        }}
      >
        <Text>Search Result</Text>
      </FlatList>
    );
  }
}
