import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import Config from '../../Common/Config';

const config = new Config();

/**
 * 검색 영역
 */
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchword: '',
      searchResult: {}
    };
  }

  searchVideos = () => {
    const _URL = config.getSearchListURL(this.state.searchword);
    fetch(_URL)
      .then(response => response.json())
      .then(responseJSON => {
        this.props.onSearch(responseJSON);
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
          value={this.state.searchword}
          onChangeText={text => {
            this.setState({ ...this.state, searchword: text });
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
                height: 30,
                width: 50,
                textAlign: 'center',
                textAlignVertical: 'center',
                lineHeight: 30,
                fontWeight: '600',
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
    marginTop: 30
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#FF4500',
    height: 30,
    width: 200
  },
  btn: {
    height: 30,
    width: 40
  }
});
