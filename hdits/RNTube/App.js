/* eslint-disable no-undef */
import React, { Component } from 'react';
import { StyleSheet, View, YellowBox } from 'react-native';
import VideoDetail from './Components/VideoDetail';
import SearchContainer from './Container/SearchContainer';
import VideoListContainer from './Container/VideoListContainer';
import { connect } from 'react-redux';
import * as actions from './Reducers/YoutubeReducer';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings(['Task orphaned']);
  }

  render() {
    closeDetail = () => {
      this.props.clearVideoID();
    };

    return (
      <View style={styles.container}>
        <SearchContainer />
        <VideoListContainer style={styles.videoList} />
        <ViewDetail videoId={this.props.videoID} closeDetail={closeDetail} />
      </View>
    );
  }
}

const ViewDetail = ({ videoId, closeDetail }) => {
  if (videoId) {
    return <VideoDetail videoId={videoId.videoID} closeDetail={closeDetail} />;
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFA500'
  },
  videoList: {
    display: 'flex',
    flex: 9,
    flexDirection: 'row',
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    backgroundColor: 'white'
  }
});

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = state => ({
  videoID: state.videoID
});

const mapDispatchToProps = dispatch => ({
  setVideoID: videoID => {
    dispatch(actions.setVideoID(videoID));
  },
  clearVideoID: () => {
    dispatch(actions.clearVideoID());
  }
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default App;
