import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import Config from '../../Common/Config';
import { inject, observer } from 'mobx-react';

const config = new Config();

/**
 * 검색 영역
 */
@inject('mobxStore')
@observer
export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  searchVideos = () => {
    const _URL = config.getSearchListURL(this.props.mobxStore.searchword);
    fetch(_URL)
      .then(response => response.json())
      .then(responseJSON => {
        this.props.mobxStore.setVideoList(
          responseJSON.items,
          responseJSON.nextPageToken,
          this.props.mobxStore.searchword
        );
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="검색어를 입력하세요"
          style={styles.inputBox}
          value={this.props.mobxStore.searchword}
          onChangeText={text => {
            this.props.mobxStore.setSearchword(text);
          }}
          autoFocus={true}
          autoCapitalize="none"
          returnKeyType="search"
          onSubmitEditing={this.searchVideos}
        />
        <TouchableHighlight onPress={this.searchVideos} style={styles.btn}>
          <View style={styles.btn}>
            <Text
              style={{
                backgroundColor: 'red',
                color: 'white',
                height: 50,
                width: 50,
                textAlign: 'center',
                textAlignVertical: 'center',
                lineHeight: 15,
                fontWeight: '600',
                fontSize: 15,
                marginLeft: 10
              }}
            >
              검색
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#FF4500',
    height: 50,
    fontSize: 15,
    width: 200
  },
  btn: {
    height: 50,
    width: 40
  }
});
