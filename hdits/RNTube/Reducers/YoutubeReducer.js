const SET_VIDEOLIST = 'youtube/SET_VIDEO_LIST';
const ADD_VIDEOLIST = 'youtube/ADD_VIDEO_LIST';
const SET_VIDEOID = 'youtube/SET_VIDEO_ID';
const CLEAR_VIDEOID = 'youtube/CLEAR_VIDEO_ID';

const initialState = {
  nextPageToken: undefined,
  searchItems: [],
  searchword: '',
  isNewSearch: true,
  videoID: undefined
};

function youtubeReducer(state = initialState, action = {}) {
  switch (action.type) {
  case SET_VIDEOLIST:
    return {
      nextPageToken: action.nextPageToken,
      searchItems: action.videoList,
      searchword: action.searchword,
      isNewSearch: true,
      videoID: undefined
    };
  case ADD_VIDEOLIST:
    return {
      searchword: state.searchword,
      searchItems: [...state.searchItems, ...action.videoList],
      nextPageToken: action.nextPageToken,
      isNewSearch: false,
      videoID: undefined
    };
  case SET_VIDEOID:
    return {
      searchword: state.searchword,
      searchItems: state.searchItems,
      nextPageToken: state.nextPageToken,
      isNewSearch: state.isNewSearch,
      videoID: action.videoID
    };
  case CLEAR_VIDEOID:
    return {
      searchword: state.searchword,
      searchItems: state.searchItems,
      nextPageToken: state.nextPageToken,
      isNewSearch: state.isNewSearch,
      videoID: undefined
    };
  default:
    return state;
  }
}

export default youtubeReducer;

export function setVideoList({ videoList, nextPageToken, searchword }) {
  return {
    type: SET_VIDEOLIST,
    videoList: videoList,
    nextPageToken: nextPageToken,
    searchword: searchword
  };
}

export function addVideoList({ videoList, nextPageToken }) {
  return {
    type: ADD_VIDEOLIST,
    videoList: videoList,
    nextPageToken: nextPageToken
  };
}

export function setVideoID(videoID) {
  return { type: SET_VIDEOID, videoID: videoID };
}

export function clearVideoID() {
  return { type: CLEAR_VIDEOID };
}
