import React, { Component } from 'react';
import { Button, View, Text, TextInput, Alert } from 'react-native';

class Search extends Component {
  handlePress = () => {
    Alert.alert('ReactNative Photo', 'API가 검색을 지원하지 않네요.');
  };

  render() {
    return (
      <View
        style={{
          flex: 0.3,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ flex: 1, marginTop: 30 }}>Photo Search</Text>
        <View
          style={{
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20
          }}
        >
          <TextInput
            placeholder="검색어"
            style={{ flex: 2, borderWidth: 0.4, padding: 5, height: 30 }}
          />
          <Button
            style={{ flex: 1 }}
            title="SEARCH"
            onPress={this.handlePress}
          />
        </View>
      </View>
    );
  }
}

export default Search;
