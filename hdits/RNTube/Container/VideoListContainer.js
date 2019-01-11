import VideoList from '../Components/VideoList';
import { connect } from 'react-redux';
import * as actions from '../Reducers/YoutubeReducer';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = state => ({
  searchItems: state.searchItems,
  searchword: state.searchword,
  nextPageToken: state.nextPageToken,
  isNewSearch: state.isNewSearch
});

const mapDispatchToProps = dispatch => ({
  addVideoList: ({ videoList, nextPageToken }) => {
    dispatch(actions.addVideoList({ videoList, nextPageToken }));
  },
  setVideoID: videoID => {
    dispatch(actions.setVideoID({ videoID }));
  }
});

const VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

export default VideoListContainer;
