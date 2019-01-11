import Search from '../Components/Search';
import { connect } from 'react-redux';
import * as actions from '../Reducers/YoutubeReducer';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = state => ({
  searchword: state.searchword
});

const mapDispatchToProps = dispatch => ({
  setVideoList: ({ videoList, nextPageToken, searchword }) => {
    dispatch(actions.setVideoList({ videoList, nextPageToken, searchword }));
  }
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
