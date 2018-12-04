import React, { Component } from 'react';
import { Button, View, Text, TextInput, Alert } from 'react-native';

class Search extends Component {
  handlePress = () => {
    Alert.alert('ReactNative Photo', 'Clicked');
  };

  render() {
    return (
      <View>
        <Text>Photo Search</Text>
        <View>
          <TextInput
            placeholder="검색어"
            style={{ borderWidth: 0.4, padding: 5 }}
          />
          <Button title="SEARCH" onPress={this.handlePress} />
        </View>
      </View>
    );
  }
}

export default Search;
